import React from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../contexts/WeddingContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiCalendar, FiMapPin } = FiIcons;

const Story = () => {
  const { weddingData } = useWedding();

  const timeline = [
    {
      year: '2019',
      season: 'Fall',
      title: 'First Meeting',
      description: 'We met at a local coffee shop on a crisp October morning. Emma was reading a book about autumn photography, and James couldn\'t help but ask about her favorite season.',
      quote: '"I knew there was something special about her when she said fall was magical because of the way light dances through changing leaves."',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2020',
      season: 'Winter',
      title: 'First Winter Together',
      description: 'Our first winter was spent building snowmen, drinking hot cocoa, and planning our future together. We realized we both dreamed of an autumn wedding.',
      quote: '"Even in the coldest months, she brought warmth to my heart."',
      image: 'https://images.unsplash.com/photo-1516627145497-ae4cf4de8e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2021',
      season: 'Spring',
      title: 'Moving In Together',
      description: 'Spring brought new beginnings as we moved into our first apartment together. We planted a small garden and watched it grow, just like our love.',
      quote: '"Growing together, season by season."',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2022',
      season: 'Summer',
      title: 'The Adventure Year',
      description: 'We spent the summer exploring new places, hiking mountain trails, and creating memories. Each adventure brought us closer together.',
      quote: '"Life is better when we\'re exploring it together."',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2023',
      season: 'Fall',
      title: 'The Proposal',
      description: 'On a perfect autumn evening, surrounded by golden leaves and the scent of apple cider, James proposed in the same park where we had our first date.',
      quote: '"She said yes as the leaves fell around us like confetti."',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      year: '2024',
      season: 'Fall',
      title: 'Our Wedding Day',
      description: 'And now, we\'re ready to celebrate our love with all of you. Thank you for being part of our story.',
      quote: '"Today we become family, surrounded by love and autumn\'s golden embrace."',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeart} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Our Love in Fall
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              Like the changing seasons, our love has grown and transformed, becoming more beautiful with each passing year. Here's our story, told through the seasons we've shared.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 left-4 bg-harvest-orange/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {item.season} {item.year}
                    </div>
                  </div>
                </div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
                      {item.title}
                    </h3>
                    <p className="text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <blockquote className="italic text-harvest-orange dark:text-harvest-mustard font-script text-lg border-l-4 border-harvest-orange dark:border-harvest-mustard pl-4">
                      {item.quote}
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section className="py-16 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-8">
              A Letter to Our Future
            </h2>
            <div className="bg-harvest-cream/80 dark:bg-harvest-brown/80 rounded-lg p-8 shadow-lg pressed-flower">
              <p className="text-harvest-brown dark:text-harvest-cream leading-relaxed text-lg mb-6">
                Dear Future Us,
              </p>
              <p className="text-harvest-brown/90 dark:text-harvest-cream/90 leading-relaxed mb-6">
                As we write this, autumn leaves are falling outside our window, and we're planning the most important day of our lives. We want to remember this feeling - the excitement, the joy, the overwhelming love we have for each other and for everyone who will be there to celebrate with us.
              </p>
              <p className="text-harvest-brown/90 dark:text-harvest-cream/90 leading-relaxed mb-6">
                We promise to always find magic in the changing seasons, to never stop exploring together, and to remember that the best adventures are the ones we share. May our love continue to grow like the trees that change with each season - strong, beautiful, and ever-changing.
              </p>
              <p className="text-harvest-brown dark:text-harvest-cream leading-relaxed">
                With all our love,<br />
                <span className="font-script text-xl text-harvest-orange dark:text-harvest-mustard">
                  {weddingData.couple.partner1} & {weddingData.couple.partner2}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Story;