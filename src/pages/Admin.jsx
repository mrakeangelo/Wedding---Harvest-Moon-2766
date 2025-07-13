import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useWedding } from '../contexts/WeddingContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiUsers, FiMessageCircle, FiEye, FiLogOut, FiMail, FiUser } = FiIcons;

const Admin = () => {
  const { user, signIn, signOut } = useAuth();
  const { rsvps, guestbookEntries, fetchRSVPs, fetchGuestbookEntries } = useWedding();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('rsvps');

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await signIn(loginData.email, loginData.password);
      if (error) {
        alert('Login failed: ' + error.message);
      } else {
        fetchRSVPs();
        fetchGuestbookEntries();
      }
    } catch (error) {
      alert('Login failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <div className="pt-16 min-h-screen bg-harvest-cream dark:bg-harvest-brown flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto px-4"
        >
          <div className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-8 shadow-lg glass-effect">
            <div className="text-center mb-6">
              <SafeIcon icon={FiLock} className="w-12 h-12 text-harvest-orange dark:text-harvest-mustard mx-auto mb-4" />
              <h1 className="text-2xl font-serif text-harvest-brown dark:text-harvest-cream">
                Admin Access
              </h1>
              <p className="text-harvest-brown/80 dark:text-harvest-cream/80 mt-2">
                Login to manage wedding responses
              </p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div>
                <label className="block text-harvest-brown dark:text-harvest-cream font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-harvest-orange/20 dark:border-harvest-mustard/20 bg-harvest-cream dark:bg-harvest-brown text-harvest-brown dark:text-harvest-cream focus:border-harvest-orange dark:focus:border-harvest-mustard focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-harvest-orange hover:bg-harvest-deepOrange disabled:bg-harvest-orange/50 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <SafeIcon icon={FiLock} className="w-5 h-5 mr-2" />
                    Login
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-harvest-cream dark:bg-harvest-brown">
      {/* Header */}
      <section className="py-8 bg-harvest-lightOrange dark:bg-harvest-darkBrown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif text-harvest-brown dark:text-harvest-cream mb-2">
                Admin Dashboard
              </h1>
              <p className="text-harvest-brown/80 dark:text-harvest-cream/80">
                Welcome back! Here's your wedding response overview.
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-harvest-orange hover:bg-harvest-deepOrange text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <SafeIcon icon={FiLogOut} className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-8 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiUsers} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard mr-4" />
                <div>
                  <div className="text-2xl font-bold text-harvest-brown dark:text-harvest-cream">
                    {rsvps.length}
                  </div>
                  <div className="text-harvest-brown/80 dark:text-harvest-cream/80">
                    Total RSVPs
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiEye} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard mr-4" />
                <div>
                  <div className="text-2xl font-bold text-harvest-brown dark:text-harvest-cream">
                    {rsvps.filter(r => r.attending === 'yes').length}
                  </div>
                  <div className="text-harvest-brown/80 dark:text-harvest-cream/80">
                    Attending
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-harvest-orange dark:text-harvest-mustard mr-4" />
                <div>
                  <div className="text-2xl font-bold text-harvest-brown dark:text-harvest-cream">
                    {guestbookEntries.length}
                  </div>
                  <div className="text-harvest-brown/80 dark:text-harvest-cream/80">
                    Guestbook Entries
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-harvest-cream dark:bg-harvest-brown">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('rsvps')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'rsvps'
                  ? 'bg-harvest-orange text-white'
                  : 'bg-harvest-cream/50 dark:bg-harvest-brown/50 text-harvest-brown dark:text-harvest-cream hover:bg-harvest-orange/20 dark:hover:bg-harvest-mustard/20'
              }`}
            >
              RSVPs ({rsvps.length})
            </button>
            <button
              onClick={() => setActiveTab('guestbook')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'guestbook'
                  ? 'bg-harvest-orange text-white'
                  : 'bg-harvest-cream/50 dark:bg-harvest-brown/50 text-harvest-brown dark:text-harvest-cream hover:bg-harvest-orange/20 dark:hover:bg-harvest-mustard/20'
              }`}
            >
              Guestbook ({guestbookEntries.length})
            </button>
          </div>

          {/* RSVP Tab */}
          {activeTab === 'rsvps' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
            >
              <h2 className="text-xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                RSVP Responses
              </h2>
              
              {rsvps.length === 0 ? (
                <p className="text-harvest-brown/60 dark:text-harvest-cream/60 text-center py-8">
                  No RSVPs yet. Responses will appear here as they come in.
                </p>
              ) : (
                <div className="space-y-4">
                  {rsvps.map((rsvp, index) => (
                    <div key={index} className="border border-harvest-orange/20 dark:border-harvest-mustard/20 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <SafeIcon icon={FiUser} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                          <span className="font-semibold text-harvest-brown dark:text-harvest-cream">
                            {rsvp.name}
                          </span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          rsvp.attending === 'yes' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {rsvp.attending === 'yes' ? 'Attending' : 'Not Attending'}
                        </span>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-harvest-brown/80 dark:text-harvest-cream/80">
                        <div>
                          <SafeIcon icon={FiMail} className="w-4 h-4 inline mr-2" />
                          {rsvp.email}
                        </div>
                        {rsvp.phone && (
                          <div>
                            📞 {rsvp.phone}
                          </div>
                        )}
                        {rsvp.plusOne === 'yes' && (
                          <div>
                            👥 Plus One: {rsvp.plusOneName || 'Yes'}
                          </div>
                        )}
                        {rsvp.pieFlavor && (
                          <div>
                            🥧 Pie Preference: {rsvp.pieFlavor}
                          </div>
                        )}
                      </div>
                      
                      {rsvp.dietaryRestrictions && (
                        <div className="mt-2 text-sm text-harvest-brown/80 dark:text-harvest-cream/80">
                          <strong>Dietary Restrictions:</strong> {rsvp.dietaryRestrictions}
                        </div>
                      )}
                      
                      {rsvp.message && (
                        <div className="mt-2 text-sm text-harvest-brown/80 dark:text-harvest-cream/80">
                          <strong>Message:</strong> {rsvp.message}
                        </div>
                      )}
                      
                      {rsvp.created_at && (
                        <div className="mt-2 text-xs text-harvest-brown/60 dark:text-harvest-cream/60">
                          Submitted: {new Date(rsvp.created_at).toLocaleString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Guestbook Tab */}
          {activeTab === 'guestbook' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-harvest-cream/50 dark:bg-harvest-brown/50 rounded-lg p-6 shadow-lg glass-effect"
            >
              <h2 className="text-xl font-serif text-harvest-brown dark:text-harvest-cream mb-6">
                Guestbook Entries
              </h2>
              
              {guestbookEntries.length === 0 ? (
                <p className="text-harvest-brown/60 dark:text-harvest-cream/60 text-center py-8">
                  No guestbook entries yet. Messages will appear here as they come in.
                </p>
              ) : (
                <div className="space-y-4">
                  {guestbookEntries.map((entry, index) => (
                    <div key={index} className="border border-harvest-orange/20 dark:border-harvest-mustard/20 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <SafeIcon icon={FiUser} className="w-5 h-5 text-harvest-orange dark:text-harvest-mustard mr-2" />
                        <span className="font-semibold text-harvest-brown dark:text-harvest-cream">
                          {entry.name}
                        </span>
                        {entry.location && (
                          <span className="ml-2 text-sm text-harvest-brown/60 dark:text-harvest-cream/60">
                            from {entry.location}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-harvest-brown/80 dark:text-harvest-cream/80 mb-2">
                        {entry.message}
                      </p>
                      
                      {entry.created_at && (
                        <div className="text-xs text-harvest-brown/60 dark:text-harvest-cream/60">
                          Submitted: {new Date(entry.created_at).toLocaleString()}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;