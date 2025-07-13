import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const ImageModal = ({ isOpen, onClose, image, onPrevious, onNext, hasNext, hasPrevious }) => {
  if (!isOpen || !image) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-harvest-mustard transition-colors duration-200 z-10"
        >
          <SafeIcon icon={FiX} className="w-8 h-8" />
        </button>

        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-harvest-mustard transition-colors duration-200 z-10"
          >
            <SafeIcon icon={FiChevronLeft} className="w-8 h-8" />
          </button>
        )}

        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-harvest-mustard transition-colors duration-200 z-10"
          >
            <SafeIcon icon={FiChevronRight} className="w-8 h-8" />
          </button>
        )}

        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-full object-contain rounded-lg"
        />

        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
            <p className="text-center">{image.caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ImageModal;