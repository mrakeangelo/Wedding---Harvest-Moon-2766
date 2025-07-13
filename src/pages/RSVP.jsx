import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../contexts/WeddingContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCheck, FiX, FiHeart, FiUser, FiMail, FiMessageCircle } = FiIcons;

const RSVP = () => {
  const { submitRSVP } = useWedding();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attending: '',
    plusOne: '',
    plusOneName: '',
    dietaryRestrictions: '',
    pieFlavor: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pieFlavors = [
    'Apple Cinnamon',
    'Pumpkin Spice',
    'Pecan',
    'Sweet Potato',
    'Cranberry Apple',
    'Maple Walnut'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitRSVP({
        ...formData,
        created_at: new Date().toISOString()
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert('There was an error submitting your RSVP. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      alert('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-harvest-cream dark:bg-harvest-brown flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto px-4"
        >
          <div className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-8 shadow-lg glass-effect sparkle">
            <div className="text-6xl mb-6">🍂</div>
            <h1 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 mb-6">
              We're so excited to celebrate with you under the autumn leaves!
            </p>
            <div className="text-harvest-orange dark:text-harvest-mustard font-script text-lg">
              See You Under the Leaves ✨
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <div className="text-6xl mb-6">🍂</div>
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Will You Join Our Harvest?
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              We can't wait to celebrate this special day with you. Please let us know if you'll be joining us for our autumn celebration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-8 shadow-lg glass-effect"
            >
              {/* Basic Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                  Your Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Attendance */}
              <div className="mb-8">
                <h2 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                  Will You Be Attending?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 cursor-pointer hover:bg-harvest-orange/10 dark:hover:bg-harvest-mustard/10 transition-colors duration-200">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === 'yes'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                    <span className="text-harvest-brown dark:text-harvest-cream">Yes, I'll be there!</span>
                  </label>
                  
                  <label className="flex items-center p-4 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 cursor-pointer hover:bg-harvest-orange/10 dark:hover:bg-harvest-mustard/10 transition-colors duration-200">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === 'no'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <SafeIcon icon={FiX} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                    <span className="text-harvest-brown dark:text-harvest-cream">Sorry, can't make it</span>
                  </label>
                </div>
              </div>

              {/* Plus One */}
              {formData.attending === 'yes' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                    Plus One
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <label className="flex items-center p-4 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 cursor-pointer hover:bg-harvest-orange/10 dark:hover:bg-harvest-mustard/10 transition-colors duration-200">
                      <input
                        type="radio"
                        name="plusOne"
                        value="yes"
                        checked={formData.plusOne === 'yes'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="text-harvest-brown dark:text-harvest-cream">Yes, bringing a guest</span>
                    </label>
                    
                    <label className="flex items-center p-4 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 cursor-pointer hover:bg-harvest-orange/10 dark:hover:bg-harvest-mustard/10 transition-colors duration-200">
                      <input
                        type="radio"
                        name="plusOne"
                        value="no"
                        checked={formData.plusOne === 'no'}
                        onChange={handleInputChange}
                        className="mr-3"
                      />
                      <span className="text-harvest-brown dark:text-harvest-cream">Just me</span>
                    </label>
                  </div>
                  
                  {formData.plusOne === 'yes' && (
                    <div>
                      <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                        Guest's Name
                      </label>
                      <input
                        type="text"
                        name="plusOneName"
                        value={formData.plusOneName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Pie Flavor Selection */}
              {formData.attending === 'yes' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                    Pie Flavor Preference 🥧
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    {pieFlavors.map((flavor) => (
                      <label key={flavor} className="flex items-center p-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 cursor-pointer hover:bg-harvest-orange/10 dark:hover:bg-harvest-mustard/10 transition-colors duration-200">
                        <input
                          type="radio"
                          name="pieFlavor"
                          value={flavor}
                          checked={formData.pieFlavor === flavor}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <span className="text-harvest-brown dark:text-harvest-cream">{flavor}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Dietary Restrictions */}
              {formData.attending === 'yes' && (
                <div className="mb-8">
                  <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                    Dietary Restrictions or Allergies
                  </label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                    placeholder="Please let us know of any dietary restrictions or allergies..."
                  />
                </div>
              )}

              {/* Message */}
              <div className="mb-8">
                <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                  Message for the Happy Couple
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                  placeholder="Share your excitement, well wishes, or favorite memory with us..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-harvest-orange hover:bg-harvest-deepOrange disabled:bg-harvest-orange/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <SafeIcon icon={FiHeart} className="w-5 h-5 mr-2" />
                    Send RSVP
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;