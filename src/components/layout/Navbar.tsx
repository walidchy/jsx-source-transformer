
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-sm py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="font-bold text-2xl text-morocco-red">
            efacture<span className="text-morocco-green">maroc</span>
            <span className="text-gray-600 text-sm">.com</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-morocco-red transition-colors duration-300">
            Fonctionnalités
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-morocco-red transition-colors duration-300">
            Tarifs
          </a>
          <a href="#contact" className="text-gray-700 hover:text-morocco-red transition-colors duration-300">
            Contact
          </a>
          <Button variant="outline" className="border-morocco-red text-morocco-red hover:bg-morocco-red hover:text-white">
            Connexion
          </Button>
          <Button className="bg-morocco-green hover:bg-morocco-green/90 text-white">
            S'inscrire
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t animate-fade-in">
          <div className="flex flex-col space-y-3 pt-3">
            <a href="#features" className="text-gray-700 hover:text-morocco-red transition-colors duration-300 py-2">
              Fonctionnalités
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-morocco-red transition-colors duration-300 py-2">
              Tarifs
            </a>
            <a href="#contact" className="text-gray-700 hover:text-morocco-red transition-colors duration-300 py-2">
              Contact
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-morocco-red text-morocco-red w-full">
                Connexion
              </Button>
              <Button className="bg-morocco-green hover:bg-morocco-green/90 text-white w-full">
                S'inscrire
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
