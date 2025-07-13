import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiHome, FiCamera, FiCoffee, FiMapPin, FiGift, FiExternalLink } = FiIcons;

const Registry = () => {
  const registryItems = [
    {
      icon: FiHome,
      title: 'Cozy Throw Blankets',
      description: 'Soft, warm blankets for our autumn evenings together',
      price: '$45-85',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiCoffee,
      title: 'Premium Coffee Collection',
      description: 'Artisan coffee beans from around the world',
      price: '$25-60',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiCamera,
      title: 'Polaroid Camera',
      description: 'For capturing spontaneous moments together',
      price: '$120',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiHome,
      title: 'Cast Iron Dutch Oven',
      description: 'Perfect for hearty autumn stews and bread baking',
      price: '$85',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiMapPin,
      title: 'Honeymoon Fund',
      description: 'Help us create memories on our dream honeymoon',
      price: 'Any amount',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiGift,
      title: 'Board Game Collection',
      description: 'Games for cozy nights in with friends and family',
      price: '$30-80',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiHome,
      title: 'Herb Garden Kit',
      description: 'Everything we need to grow fresh herbs at home',
      price: '$40',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiCoffee,
      title: 'Artisan Tea Set',
      description: 'Beautiful ceramic tea set for afternoon tea',
      price: '$65',
      priority: 'medium',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: FiHome,
      title: 'Cabin Fund',
      description: 'Help us save for our dream cabin in the mountains',
      price: 'Any amount',
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-harvest-orange/20 text-harvest-orange dark:text-harvest-mustard';
      case 'medium':
        return 'bg-harvest-sage/20 text-harvest-sage';
      default:
        return 'bg-harvest-brown/20 text-harvest-brown dark:text-harvest-cream';
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-6xl mb-6">🎁</div>
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Our Cozy Wishlist
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed mb-8">
              Your presence at our wedding is the greatest gift we could ask for. If you wish to honor us with a gift, here are some things that would help us build our cozy life together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#registry-items"
                className="bg-harvest-orange hover:bg-harvest-deepOrange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View Our Wishlist
              </a>
              <a
                href="#honeymoon-fund"
                className="bg-transparent border-2 border-harvest-brown dark:border-harvest-cream text-harvest-brown dark:text-harvest-cream hover:bg-harvest-brown hover:text-harvest-cream dark:hover:bg-harvest-cream dark:hover:text-harvest-brown px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Honeymoon Fund
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registry Items */}
      <section id="registry-items" className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Registry Items
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80">
              Items to help us create a warm, cozy home together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {registryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg overflow-hidden shadow-lg glass-effect hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                    {item.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <SafeIcon icon={item.icon} className="w-6 h-6 text-harvest-orange dark:text-harvest-mustard mr-3" />
                    <h3 className="text-xl font-semibold text-harvest-brown dark:text-harvest-cream">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-harvest-brown/80 dark:text-harvest-cream/80 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-harvest-orange dark:text-harvest-mustard font-bold text-lg">
                      {item.price}
                    </span>
                    <button className="bg-harvest-orange hover:bg-harvest-deepOrange text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center">
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4 mr-2" />
                      View Item
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon Fund */}
      <section id="honeymoon-fund" className="py-16 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="text-6xl mb-6">🌙</div>
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Honeymoon Under the Stars
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed mb-8">
              We're planning a magical honeymoon to a cozy cabin in the mountains, where we can watch the stars, sip hot cocoa by the fireplace, and create our first memories as a married couple. Your contribution would help make this dream come true.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { amount: '$50', description: 'Romantic dinner for two' },
                { amount: '$100', description: 'Couples spa treatment' },
                { amount: '$200', description: 'Mountain cabin for one night' }
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 glass-effect"
                >
                  <div className="text-2xl font-bold text-harvest-orange dark:text-harvest-mustard mb-2">
                    {option.amount}
                  </div>
                  <p className="text-harvest-brown/80 dark:text-harvest-cream/80">
                    {option.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <button className="bg-harvest-orange hover:bg-harvest-deepOrange text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2" />
              Contribute to Honeymoon Fund
            </button>
          </motion.div>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Thank You
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              Whether you choose to give a gift or simply share in our celebration, your love and support mean everything to us. We're so grateful to have you in our lives and can't wait to celebrate with you on our special day.
            </p>
            <div className="mt-8 text-harvest-orange dark:text-harvest-mustard font-script text-xl">
              With love and gratitude,<br />
              Emma & James
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Registry;