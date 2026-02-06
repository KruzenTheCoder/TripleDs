import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, AnimatePresence } from '@headlessui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Specials', href: '/specials' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { state: cartState } = useCart();
  const cartItemCount = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen flex flex-col font-sans overflow-x-hidden">
      <motion.header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen ? 'glass py-2' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center justify-between px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
              <span className="sr-only">Triple D's Streetfood</span>
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="text-3xl"
              >
                🍛
              </motion.div>
              <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
                isScrolled ? 'text-primary' : 'text-white text-shadow-lg'
              }`}>
                Triple D's
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-300 hover:scale-105 transform ${
                  location.pathname === item.href 
                    ? 'text-primary border-b-2 border-primary' 
                    : isScrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-secondary text-shadow'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <Link to="/order" className="group relative flex items-center">
               <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.95 }}
                 className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                   isScrolled 
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-md' 
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/40'
                 }`}
               >
                 <span>Order Now</span>
                 <span aria-hidden="true">&rarr;</span>
               </motion.div>
               {cartItemCount > 0 && (
                 <motion.span 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   className="absolute -top-2 -right-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-white text-xs font-bold shadow-lg"
                 >
                   {cartItemCount}
                 </motion.span>
               )}
            </Link>
          </div>
        </nav>
        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all duration-300">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Triple D's Streetfood</span>
                <span className="text-xl font-serif font-bold text-primary">Triple D's</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-red-50 hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/order"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary hover:bg-primary-hover shadow-md text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Order Now</span>
                    {cartItemCount > 0 && (
                      <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-primary text-xs font-bold">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </motion.header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-white border-t border-white/10">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.map((item) => (
              <div key={item.name} className="pb-6">
                <Link to={item.href} className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors">
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pb-6">
                <Link to="/loyalty" className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors">
                  Loyalty
                </Link>
            </div>
          </nav>
          <div className="mt-10 flex justify-center space-x-10">
            <motion.a 
              whileHover={{ scale: 1.2, color: '#FF6F00' }}
              href="#" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: '#FF6F00' }}
              href="#" 
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06zm0 1.962h-.08c-2.588 0-2.918.01-3.772.049-.853.039-1.318.19-1.618.306a2.932 2.932 0 00-1.082.705 2.932 2.932 0 00-.705 1.082c-.117.3-.267.765-.306 1.618-.039.854-.049 1.184-.049 3.772v.08c0 2.588.01 2.918.049 3.772.039.853.19 1.318.306 1.618.232.596.502 1.01 1.082 1.715.597.58 1.01.85 1.618 1.082.3.117.766.267 1.618.306.854.039 1.184.049 3.772.049h.08c2.588 0 2.918-.01 3.772-.049.854-.039 1.318-.19 1.618-.306a2.932 2.932 0 001.082-.705 2.932 2.932 0 00.705-1.082c.117-.3.267-.765.306-1.618.039-.854.049-1.184.049-3.772v-.08c0-2.588-.01-2.918-.049-3.772-.039-.853-.19-1.318-.306-1.618a2.932 2.932 0 00-.705-1.082 2.932 2.932 0 00-1.082-.705c-.3-.117-.765-.267-1.618-.306-.854-.039-1.184-.049-3.772-.049zM12.315 6.848a5.467 5.467 0 110 10.934 5.467 5.467 0 010-10.934zm0 1.962a3.505 3.505 0 100 7.01 3.505 3.505 0 000-7.01zM17.657 5.373a1.307 1.307 0 110 2.614 1.307 1.307 0 010-2.614z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2024 Triple D's Streetfood. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
