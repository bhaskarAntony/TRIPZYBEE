import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import logoImage from 'figma:asset/d757522f96a43ad20a0312d1f813cc6fc6d85880.png';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { wishlist } = useWishlist();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Culture & Heritage', path: '/culture' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#FEF3C7] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-16 w-16 rounded-full overflow-hidden bg-[#FEF3C7] shadow-md flex items-center justify-center">
              <img src={logoImage} alt="TripzyBee Logo" className="h-30 w-30 object-cover scale-150" style={{ objectPosition: 'right 40%' }} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#FF9933]">
                TRIPZYBEE
              </h1>
              <p className="text-xs text-gray-700">A Tribe Of Explorers!</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-[#FF9933] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-[#FF9933] hover:text-white shadow-sm'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/wishlist"
              className={`relative flex items-center px-4 py-2 rounded-lg transition-all ${
                isActive('/wishlist')
                  ? 'bg-[#FF9933] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-[#FF9933] hover:text-white shadow-sm'
              }`}
            >
              <Heart className={isActive('/wishlist') ? 'fill-current' : ''} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-4 my-1 mx-2 rounded-lg transition-all ${
                  isActive(link.path)
                    ? 'bg-[#FF9933] text-white'
                    : 'bg-white text-gray-700 hover:bg-[#FF9933] hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/wishlist"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center justify-between py-3 px-4 my-1 mx-2 rounded-lg transition-all ${
                isActive('/wishlist')
                  ? 'bg-[#FF9933] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#FF9933] hover:text-white'
              }`}
            >
              <span>Wishlist</span>
              {wishlist.length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
