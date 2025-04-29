
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16"> {/* Adding padding top to account for fixed navbar */}
        <Hero />
        <Features />
        <Pricing />
      </div>
      <Footer />
      
      {/* Quick access buttons for demonstration */}
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-md p-2 z-50">
        <div className="text-sm font-medium mb-2 text-gray-700">Navigation rapide (démo)</div>
        <div className="flex flex-col gap-2">
          <Link to="/login" className="text-sm text-morocco-red hover:underline">Connexion</Link>
          <Link to="/register" className="text-sm text-morocco-red hover:underline">Inscription</Link>
          <Link to="/dashboard" className="text-sm text-morocco-red hover:underline">Dashboard Admin</Link>
          <Link to="/client" className="text-sm text-morocco-red hover:underline">Espace Client</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
