import React from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../contexts/WeddingContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMapPin, FiClock, FiInfo, FiCamera, FiGift } = FiIcons;

const Details = () => {
  const { weddingData } = useWedding();

  const eventDetails = [
    {
      icon: FiCalendar,
      title: 'Ceremony',
      time: weddingData.ceremony.time,
      venue: weddingData.ceremony.venue,
      address: weddingData.ceremony.address,
      description: 'Join us as we exchange vows under the autumn sky, surrounded by the warmth of family and friends.'
    },
    {
      icon: FiClock,
      title: 'Reception',
      time: weddingData.reception.time,
      venue: weddingData.reception.venue,
      address: weddingData.reception.address,
      description: 'Celebrate with us as we dance the night away with good food, great music, and autumn-inspired cocktails.'
    }
  ];

  const weddingInfo = [
    {
      icon: FiInfo,
      title: 'Dress Code',
      content: 'Autumn Elegance - Think warm earth tones, rich jewel colors, and cozy textures. Cocktail attire with a seasonal twist.'
    },
    {
      icon: FiCamera,
      title: 'Photography',
      content: 'Our photographer will capture the magic, but we encourage you to share your favorite moments using #HarvestMoonWedding'
    },
    {
      icon: FiGift,
      title: 'Gifts',
      content: 'Your presence is the greatest gift! If you wish to honor us with a gift, please see our registry or contribute to our honeymoon fund.'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Wedding Details
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              Everything you need to know about our special day
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {eventDetails.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="mb-16"
              >
                <div className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-8 shadow-lg glass-effect">
                  <div className="flex items-center mb-6">
                    <div className="bg-harvest-orange/20 dark:bg-harvest-mustard/20 rounded-full p-3 mr-4">
                      <SafeIcon icon={event.icon} className="w-6 h-6 text-harvest-orange dark:text-harvest-mustard" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-harvest-brown dark:text-harvest-cream">
                      {event.title}
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <SafeIcon icon={FiClock} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                          <span className="font-semibold text-harvest-brown dark:text-harvest-cream">Time</span>
                        </div>
                        <p className="text-harvest-brown/80 dark:text-harvest-cream/80 ml-7">
                          {event.time}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <SafeIcon icon={FiMapPin} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                          <span className="font-semibold text-harvest-brown dark:text-harvest-cream">Venue</span>
                        </div>
                        <p className="text-harvest-brown/80 dark:text-harvest-cream/80 ml-7">
                          {event.venue}
                        </p>
                        <p className="text-harvest-brown/60 dark:text-harvest-cream/60 ml-7 text-sm">
                          {event.address}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="mt-6">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-harvest-orange hover:bg-harvest-deepOrange text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                          <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
                          View on Map
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Information */}
      <section className="py-16 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Important Information
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80">
              A few things to help you prepare for our special day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect text-center"
              >
                <div className="bg-harvest-orange/20 dark:bg-harvest-mustard/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard" />
                </div>
                <h3 className="text-xl font-semibold text-harvest-brown dark:text-harvest-cream mb-4">
                  {info.title}
                </h3>
                <p className="text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
                  {info.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Day of Timeline
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80">
              Here's how our special day will unfold
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {[
              { time: '3:30 PM', event: 'Guests arrive & find their seats' },
              { time: '4:00 PM', event: 'Ceremony begins' },
              { time: '4:30 PM', event: 'Cocktail hour & photos' },
              { time: '6:00 PM', event: 'Reception begins' },
              { time: '6:30 PM', event: 'Dinner is served' },
              { time: '8:00 PM', event: 'First dance & toasts' },
              { time: '8:30 PM', event: 'Dancing & celebration' },
              { time: '11:00 PM', event: 'Last dance & farewell' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex items-center mb-6 bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-4 glass-effect"
              >
                <div className="bg-harvest-orange dark:bg-harvest-mustard text-white rounded-full w-20 h-20 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="font-semibold text-sm text-center">{item.time}</span>
                </div>
                <div>
                  <p className="text-harvest-brown dark:text-harvest-cream font-semibold">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;