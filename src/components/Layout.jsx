import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FallingLeaves from './FallingLeaves';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-harvest-cream dark:bg-harvest-darkBrown transition-colors duration-300">
      <FallingLeaves />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;