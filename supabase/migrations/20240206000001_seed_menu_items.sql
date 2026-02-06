-- Seed Menu Items

DO $$
DECLARE
    curry_cat_id UUID;
    seafood_cat_id UUID;
    street_cat_id UUID;
    sides_cat_id UUID;
    drinks_cat_id UUID;
BEGIN
    SELECT id INTO curry_cat_id FROM menu_categories WHERE name = 'Curries & Bunny Chow';
    SELECT id INTO seafood_cat_id FROM menu_categories WHERE name = 'Seafood';
    SELECT id INTO street_cat_id FROM menu_categories WHERE name = 'Street Classics';
    SELECT id INTO sides_cat_id FROM menu_categories WHERE name = 'Sides & Add-Ons';
    SELECT id INTO drinks_cat_id FROM menu_categories WHERE name = 'Drinks';

    -- Curries
    INSERT INTO menu_items (category_id, name, description, price, dietary_tags, image_url, sort_order) VALUES
    (curry_cat_id, 'Mutton Bunny Chow', 'Tender mutton curry served in a fresh quarter loaf of white bread.', 95.00, '["Spicy", "Halal"]', 'https://images.unsplash.com/photo-1585937421612-70a008356f36?auto=format&fit=crop&w=800&q=80', 1),
    (curry_cat_id, 'Chicken Curry', 'Durban style chicken curry with potatoes, served with rice or roti.', 85.00, '["Spicy", "Halal"]', 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', 2),
    (curry_cat_id, 'Beans Bunny Chow', 'Sugar beans curry in a quarter loaf. A vegetarian classic.', 55.00, '["Vegetarian", "Spicy"]', 'https://images.unsplash.com/photo-1546833999-b9f5816029bd?auto=format&fit=crop&w=800&q=80', 3);

    -- Seafood
    INSERT INTO menu_items (category_id, name, description, price, dietary_tags, image_url, sort_order) VALUES
    (seafood_cat_id, 'Hake & Chips', 'Freshly fried hake fillet with crispy chips and tartare sauce.', 90.00, '["Halal"]', 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=800&q=80', 1),
    (seafood_cat_id, 'Prawn Curry', 'Succulent prawns cooked in a rich, spicy tomato gravy.', 120.00, '["Spicy", "Halal"]', 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', 2);

    -- Street Classics
    INSERT INTO menu_items (category_id, name, description, price, dietary_tags, image_url, sort_order) VALUES
    (street_cat_id, 'Tikka Chicken Burger', 'Spicy chicken fillet with lettuce, tomato, and tikka sauce on a toasted bun.', 65.00, '["Spicy", "Halal"]', 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', 1),
    (street_cat_id, 'Chicken Chowmein', 'Stir-fried noodles with chicken strips and mixed vegetables.', 75.00, '["Halal"]', 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80', 2);

    -- Drinks
    INSERT INTO menu_items (category_id, name, description, price, dietary_tags, image_url, sort_order) VALUES
    (drinks_cat_id, 'Bombay Crush', 'Rose flavored milk drink with basil seeds and vermicelli.', 45.00, '["Vegetarian"]', 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80', 1);

END $$;
