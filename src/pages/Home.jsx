import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useWedding } from '../contexts/WeddingContext';
import CountdownTimer from '../components/CountdownTimer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Home = () => {
  const { weddingData } = useWedding();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center parallax-bg autumn-leaves-bg">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-script text-harvest-mustard mb-4 text-shadow">
              {weddingData.couple.partner1} & {weddingData.couple.partner2}
            </h1>
            <p className="text-xl md:text-2xl font-serif text-harvest-cream mb-2 text-shadow">
              are getting married
            </p>
            <div className="flex items-center justify-center text-harvest-cream/90 text-lg">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              <span>{new Date(weddingData.ceremony.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8"
          >
            <CountdownTimer targetDate={`${weddingData.ceremony.date} ${weddingData.ceremony.time}`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/rsvp"
              className="bg-harvest-orange hover:bg-harvest-deepOrange text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Will You Join Our Harvest?
            </Link>
            <Link
              to="/story"
              className="bg-transparent border-2 border-harvest-cream text-harvest-cream hover:bg-harvest-cream hover:text-harvest-brown px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Our Love Story
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Welcome to Our Autumn Celebration
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed mb-8">
              Join us as we celebrate love, gratitude, and the beginning of our new chapter together. 
              Like the changing leaves, our love has grown more beautiful with each passing season. 
              We can't wait to share this magical autumn evening with you.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-harvest-orange/10 dark:bg-harvest-mustard/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCalendar} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard" />
                </div>
                <h3 className="text-xl font-semibold text-harvest-brown dark:text-harvest-cream mb-2">
                  Ceremony
                </h3>
                <p className="text-harvest-brown/70 dark:text-harvest-cream/70">
                  {weddingData.ceremony.time} at {weddingData.ceremony.venue}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-harvest-orange/10 dark:bg-harvest-mustard/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard" />
                </div>
                <h3 className="text-xl font-semibold text-harvest-brown dark:text-harvest-cream mb-2">
                  Reception
                </h3>
                <p className="text-harvest-brown/70 dark:text-harvest-cream/70">
                  {weddingData.reception.time} at {weddingData.reception.venue}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fall Favorites Preview */}
      <section className="py-16 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Our Fall Favorites
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80">
              The little things that make autumn magical for us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { emoji: '🍎', title: 'Apple Cider', desc: 'Warm and spiced, just like our love' },
              { emoji: '🎵', title: 'Acoustic Folk', desc: 'The soundtrack to our autumn romance' },
              { emoji: '🕯️', title: 'Candlelight', desc: 'Creating cozy moments together' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 glass-effect"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold text-harvest-brown dark:text-harvest-cream mb-2">
                  {item.title}
                </h3>
                <p className="text-harvest-brown/70 dark:text-harvest-cream/70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;