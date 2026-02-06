-- Update RLS to allow guest orders
DROP POLICY IF EXISTS "Users can create orders" ON orders;

CREATE POLICY "Users can create orders" ON orders
    FOR INSERT WITH CHECK (
        -- Allow if authenticated user matches user_id
        (auth.uid() = user_id) OR 
        -- Allow guest orders (user_id is null)
        (user_id IS NULL)
    );

-- Also allow viewing own orders (for guest, maybe via order number later, but for now strict)
-- We keep "Users can view own orders" as is.

-- Allow creating order items for guest orders
DROP POLICY IF EXISTS "Users can create order items" ON order_items;
-- Actually I didn't create a specific policy for order_items insert in the first migration?
-- I only did `ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;`
-- If I enabled RLS but didn't add a policy, then NO inserts are allowed by default!

-- So I need to add policies for order_items
CREATE POLICY "Users can create order items" ON order_items
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM orders 
            WHERE orders.id = order_items.order_id 
            AND (
                (orders.user_id = auth.uid()) OR 
                (orders.user_id IS NULL)
            )
        )
    );

-- Allow reading public menu items (I forgot this too!)
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active categories" ON menu_categories
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view available menu items" ON menu_items
    FOR SELECT USING (is_available = true);
