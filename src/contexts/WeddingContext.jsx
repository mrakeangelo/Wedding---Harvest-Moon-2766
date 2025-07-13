import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const WeddingContext = createContext();

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};

export const WeddingProvider = ({ children }) => {
  const [weddingData, setWeddingData] = useState({
    couple: {
      partner1: 'Emma',
      partner2: 'James',
      story: 'Our love story began on a crisp autumn morning...'
    },
    ceremony: {
      date: '2024-10-15',
      time: '4:00 PM',
      venue: 'Maple Ridge Farm',
      address: '123 Harvest Lane, Autumn Valley, NY 12345'
    },
    reception: {
      time: '6:00 PM',
      venue: 'The Rustic Barn',
      address: '456 Golden Oak Drive, Autumn Valley, NY 12345'
    }
  });

  const [rsvps, setRsvps] = useState([]);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRSVPs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setRsvps(data || []);
    } catch (error) {
      console.error('Error fetching RSVPs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGuestbookEntries = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('guestbook_entries')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setGuestbookEntries(data || []);
    } catch (error) {
      console.error('Error fetching guestbook entries:', error);
    } finally {
      setLoading(false);
    }
  };

  const submitRSVP = async (rsvpData) => {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .insert([rsvpData])
        .select();
      
      if (error) throw error;
      setRsvps(prev => [data[0], ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      return { success: false, error: error.message };
    }
  };

  const submitGuestbookEntry = async (entry) => {
    try {
      const { data, error } = await supabase
        .from('guestbook_entries')
        .insert([entry])
        .select();
      
      if (error) throw error;
      setGuestbookEntries(prev => [data[0], ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Error submitting guestbook entry:', error);
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    fetchRSVPs();
    fetchGuestbookEntries();
  }, []);

  const value = {
    weddingData,
    setWeddingData,
    rsvps,
    guestbookEntries,
    loading,
    submitRSVP,
    submitGuestbookEntry,
    fetchRSVPs,
    fetchGuestbookEntries
  };

  return (
    <WeddingContext.Provider value={value}>
      {children}
    </WeddingContext.Provider>
  );
};