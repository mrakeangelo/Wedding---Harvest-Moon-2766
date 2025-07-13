import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../contexts/WeddingContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFeather, FiHeart, FiUser, FiMessageCircle, FiWind } = FiIcons;

const Guestbook = () => {
  const { guestbookEntries, submitGuestbookEntry } = useWedding();
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const result = await submitGuestbookEntry({
        ...formData,
        created_at: new Date().toISOString()
      });

      if (result.success) {
        setFormData({ name: '', message: '', location: '' });
        // Add a little sparkle effect
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl pointer-events-none z-50 animate-ping';
        document.body.appendChild(sparkle);
        setTimeout(() => document.body.removeChild(sparkle), 1000);
      } else {
        alert('There was an error submitting your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting guestbook entry:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
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
            <div className="text-6xl mb-6">🍃</div>
            <h1 className="text-4xl md:text-5xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
              Leave a Blessing on the Wind
            </h1>
            <p className="text-xl text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed">
              Share your thoughts, memories, and well wishes with us. Like autumn leaves carried on the wind, your words will be treasured forever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guestbook Form */}
      <section className="py-16 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-8 shadow-lg glass-effect mb-16"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiFeather} className="w-6 h-6 text-harvest-orange dark:text-harvest-mustard mr-3" />
                <h2 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream">
                  Sign Our Guestbook
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                    Your Name *
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
                    From Where?
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="City, State/Country"
                    className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                  placeholder="Share your thoughts, memories, or well wishes for the happy couple..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-harvest-orange hover:bg-harvest-deepOrange disabled:bg-harvest-orange/50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <SafeIcon icon={FiWind} className="w-5 h-5 mr-2" />
                    Send Your Blessing
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Guestbook Entries */}
      <section className="py-16 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-harvest-brown dark:text-harvest-cream mb-4">
              Blessings from Our Loved Ones
            </h2>
            <p className="text-lg text-harvest-brown/80 dark:text-harvest-cream/80">
              {guestbookEntries.length} messages of love and support
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {guestbookEntries.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-4">🍂</div>
                <p className="text-harvest-brown/60 dark:text-harvest-cream/60">
                  Be the first to leave a blessing on the wind...
                </p>
              </motion.div>
            ) : (
              <div className="grid gap-6">
                {guestbookEntries.map((entry, index) => (
                  <motion.div
                    key={entry.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-harvest-orange/20 dark:bg-harvest-mustard/20 rounded-full p-3 flex-shrink-0">
                        <SafeIcon icon={FiUser} className="w-6 h-6 text-harvest-orange dark:text-harvest-mustard" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-harvest-brown dark:text-harvest-cream mr-2">
                            {entry.name}
                          </h3>
                          {entry.location && (
                            <span className="text-sm text-harvest-brown/60 dark:text-harvest-cream/60">
                              from {entry.location}
                            </span>
                          )}
                        </div>
                        <p className="text-harvest-brown/80 dark:text-harvest-cream/80 leading-relaxed mb-3">
                          {entry.message}
                        </p>
                        <div className="flex items-center text-sm text-harvest-brown/50 dark:text-harvest-cream/50">
                          <SafeIcon icon={FiMessageCircle} className="w-4 h-4 mr-1" />
                          {entry.created_at && new Date(entry.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guestbook;