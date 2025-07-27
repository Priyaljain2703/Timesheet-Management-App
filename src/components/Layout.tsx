'use client';

import React from 'react';
import Navbar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
      <div className="min-h-screen bg-gray-200 text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow  px-4 sm:px-6 lg:px-8 py-6">
        {children}
        
      </main>

     
    </div>
  );
};

export default Layout;
