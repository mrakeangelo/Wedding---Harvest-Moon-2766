import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { WeddingProvider } from './contexts/WeddingContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Details from './pages/Details';
import Gallery from './pages/Gallery';
import RSVP from './pages/RSVP';
import Registry from './pages/Registry';
import Guestbook from './pages/Guestbook';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WeddingProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/story" element={<Story />} />
                <Route path="/details" element={<Details />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rsvp" element={<RSVP />} />
                <Route path="/registry" element={<Registry />} />
                <Route path="/guestbook" element={<Guestbook />} />
                <Route path="/admin" element={<Admin />} />
              </Routes>
            </Layout>
          </Router>
        </WeddingProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;