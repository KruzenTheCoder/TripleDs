import { useEffect, useState, useRef } from 'react';
import { supabase } from '../lib/supabase';
import { useCart } from '../context/CartContext';
import { PlusIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';

type Category = {
  id: string;
  name: string;
  description: string;
};

type MenuItem = {
  id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
  dietary_tags: string[];
  is_available: boolean;
};

export default function Menu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [categoriesRes, itemsRes] = await Promise.all([
          supabase.from('menu_categories').select('*').order('sort_order'),
          supabase.from('menu_items').select('*').eq('is_available', true).order('sort_order')
        ]);

        if (categoriesRes.error) throw categoriesRes.error;
        if (itemsRes.error) throw itemsRes.error;

        setCategories(categoriesRes.data || []);
        setItems(itemsRes.data || []);
        if (categoriesRes.data && categoriesRes.data.length > 0) {
          setActiveCategory(categoriesRes.data[0].id);
        }
      } catch (err: any) {
        console.error('Error fetching menu:', err);
        setError(err.message || 'Failed to load menu. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (item: MenuItem) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image_url: item.image_url
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          <p className="mt-4 text-gray-500 font-medium animate-pulse">Preparing the menu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-3xl shadow-xl border border-red-100">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Menu Header */}
      <div className="relative bg-gray-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1596797038530-2c107a37e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Menu Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-serif font-bold text-white mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 font-light"
          >
            A culinary journey through the streets of Durban.
          </motion.p>
        </div>
      </div>

      {/* Sticky Category Nav */}
      <div className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-2 sm:gap-4 sm:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  const element = document.getElementById(category.id);
                  if (element) {
                    const offset = 100; // Adjust for sticky header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${activeCategory === category.id
                    ? 'text-white bg-primary shadow-lg scale-105'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }
                `}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-24">
        {categories.map((category) => {
          const categoryItems = items.filter((item) => item.category_id === category.id);
          if (categoryItems.length === 0) return null;

          return (
            <motion.section 
              key={category.id} 
              id={category.id} 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-gray-200 flex-1" />
                <div className="text-center">
                  <h3 className="text-3xl font-serif font-bold text-gray-900">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-500 font-light max-w-lg">{category.description}</p>
                </div>
                <div className="h-px bg-gray-200 flex-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                {categoryItems.map((item) => (
                  <motion.div 
                    key={item.id} 
                    className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={item.image_url || 'https://via.placeholder.com/400x300?text=No+Image'}
                        alt={item.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Delicious+Food';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white text-sm font-light line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {item.description}
                        </p>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2">
                         {item.dietary_tags && item.dietary_tags.map(tag => (
                           <span key={tag} className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-bold text-gray-800 shadow-sm">
                             {tag}
                           </span>
                         ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-lg font-serif font-bold text-primary whitespace-nowrap ml-4">
                          R {item.price.toFixed(0)}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm line-clamp-2 mb-6 font-light flex-1">
                        {item.description}
                      </p>
                      
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(item)}
                        className="w-full py-3 bg-gray-50 hover:bg-primary text-gray-900 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-gray-200 hover:border-transparent"
                      >
                        <PlusIcon className="w-5 h-5 group-hover/btn:rotate-180 transition-transform duration-300" />
                        Add to Order
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
