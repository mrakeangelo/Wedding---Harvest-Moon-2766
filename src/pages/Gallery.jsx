import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ImageModal from '../components/ImageModal';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiX } = FiIcons;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Autumn engagement photo',
      category: 'engagement',
      caption: 'Our engagement photo session in the golden autumn light'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Coffee shop where we met',
      category: 'memories',
      caption: 'The coffee shop where our love story began'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Autumn landscape',
      category: 'venues',
      caption: 'The beautiful autumn landscape at our ceremony venue'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Proposal moment',
      category: 'engagement',
      caption: 'The moment he proposed among the falling leaves'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Our first apartment garden',
      category: 'memories',
      caption: 'The garden we planted together in our first apartment'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Summer hiking adventure',
      category: 'memories',
      caption: 'One of our many hiking adventures together'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1516627145497-ae4cf4de8e5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Cozy winter moment',
      category: 'memories',
      caption: 'A cozy winter evening by the fireplace'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Reception venue',
      category: 'venues',
      caption: 'The rustic barn where we\'ll celebrate our reception'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Fall foliage',
      category: 'venues',
      caption: 'The stunning fall foliage surrounding our venue'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'memories', label: 'Memories' },
    { id: 'venues', label: 'Venues' }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const goToNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
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
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              A collection of moments that tell our story - from our first meeting to our engagement and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-harvest-orange text-white shadow-lg'
                    : 'bg-harvest-cream/50 dark:bg-harvest-brown/50 text-harvest-brown dark:text-harvest-cream hover:bg-harvest-orange/20 dark:hover:bg-harvest-mustard/20'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
        onPrevious={goToPrevious}
        onNext={goToNext}
        hasNext={filteredImages.length > 1}
        hasPrevious={filteredImages.length > 1}
      />
    </div>
  );
};

export default Gallery;