import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { TruckIcon, ShoppingBagIcon, UserGroupIcon, FireIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Dine-In',
    description: 'Experience our vibrant atmosphere and friendly service in the heart of Phoenix.',
    icon: UserGroupIcon,
    href: '/contact',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    name: 'Pickup',
    description: 'Skip the line. Order online and pick up your meal fresh and hot.',
    icon: ShoppingBagIcon,
    href: '/order?type=pickup',
    color: 'bg-red-100 text-red-600',
  },
  {
    name: 'Delivery',
    description: 'Get the legendary taste of Durban delivered straight to your doorstep.',
    icon: TruckIcon,
    href: '/order?type=delivery',
    color: 'bg-green-100 text-green-600',
  },
];

const testimonials = [
  {
    content: "The best bunny chow I've had in years! The mutton was tender and the gravy was perfect.",
    author: "Rajesh P.",
    role: "Foodie",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100&q=80"
  },
  {
    content: "Triple D's never disappoints. Their seafood platter is a family favorite for Friday nights.",
    author: "Sarah M.",
    role: "Regular Customer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100&q=80"
  },
  {
    content: "Authentic Durban flavors right here in Phoenix. Love the Bombay Crush!",
    author: "Thabo K.",
    role: "Local Guide",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100&q=80"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
          <img
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Delicious Durban Curry"
            className="h-full w-full object-cover scale-110"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-primary/90 text-white text-sm font-bold tracking-wider uppercase backdrop-blur-sm border border-white/20">
                Est. Phoenix, Durban
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 text-shadow-lg tracking-tight leading-tight">
              Bold Durban <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary-light">
                Flavours
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the legendary street food scene. <br/>
              Authentic. Spicy. Unforgettable.
            </p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                to="/order"
                className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center gap-2">
                  Order Now <FireIcon className="w-5 h-5 animate-pulse" />
                </span>
              </Link>
              <Link 
                to="/menu" 
                className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-bold rounded-full border border-white/30 hover:bg-white/20 transition-all hover:-translate-y-1"
              >
                View Menu
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 md:right-20 z-20 hidden md:block"
        >
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-2xl">
                🌶️
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">Spiciness Level</p>
                <div className="flex gap-1 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-2 h-6 bg-red-500 rounded-full opacity-80" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background-dark/5 to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-bold tracking-wide text-primary uppercase">Ordering Options</h2>
            <p className="mt-2 text-4xl font-serif font-bold tracking-tight text-gray-900 sm:text-5xl">
              However you want it, <br/>we've got you covered.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="flex flex-col bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-bold leading-7 text-gray-900">
                    <div className={`p-3 rounded-2xl ${feature.color}`}>
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto font-light">{feature.description}</p>
                    <p className="mt-6">
                      <Link 
                        to={feature.href} 
                        className="text-sm font-bold leading-6 text-primary hover:text-primary-hover flex items-center gap-1 group"
                      >
                        Start Order <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Featured Dish / Parallax Strip */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Bunny Chow" 
            className="w-full h-full object-cover fixed top-0 left-0 -z-10 opacity-20"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">The Legendary Bunny Chow</h2>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10">
              Fresh white bread hollowed out and filled with your choice of aromatic, spicy curry. 
              It's not just food, it's a Durban tradition.
            </p>
            <Link 
              to="/menu"
              className="inline-block px-10 py-4 bg-white text-primary font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Taste the Legend
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-bold leading-8 tracking-tight text-primary uppercase">Community Love</h2>
            <p className="mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our customers say
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-serif font-bold shadow-md">
                    "
                  </div>
                  <div className="flex gap-x-1 text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 font-light italic mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center gap-x-4 border-t border-gray-100 pt-4">
                    <img src={testimonial.image} alt={testimonial.author} className="h-10 w-10 rounded-full bg-gray-50 object-cover" />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-xs text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#D32F2F" />
                  <stop offset={1} stopColor="#FF6F00" />
                </radialGradient>
              </defs>
            </svg>
            
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
                Ready to taste the difference?
                <br />
                Start your order now.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join our loyalty program and earn points with every order. Get exclusive deals, free treats, and more.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  to="/order"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
                >
                  Order Now
                </Link>
                <Link to="/loyalty" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                  Join Loyalty <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <motion.img
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
