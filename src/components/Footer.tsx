import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import logoImage from 'figma:asset/d757522f96a43ad20a0312d1f813cc6fc6d85880.png';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-[#FEF3C7] shadow-md flex items-center justify-center">
                <img src={logoImage} alt="TripzyBee Logo" className="h-30 w-30 object-cover scale-150" style={{ objectPosition: 'center 40%' }} />
              </div>
              <div>
                <h3 className="font-bold text-[#FF9933]">TRIPZYBEE</h3>
                <p className="text-xs text-gray-400">A Tribe Of Explorers!</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Experience the rich culture, heritage, and beauty of India with TripzyBee - your trusted travel partner.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF9933] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-[#FF9933] transition-colors">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-400 hover:text-[#FF9933] transition-colors">Destinations</Link></li>
              <li><Link to="/culture" className="text-gray-400 hover:text-[#FF9933] transition-colors">Culture & Heritage</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#FF9933] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#FF9933] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Travel Street, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <span>hello@tripzybee.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get special offers and travel tips!
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                className="w-full bg-[#FF9933] hover:bg-[#E8842A]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TripzyBee. All rights reserved. | Designed with ❤️ for India</p>
        </div>
      </div>
    </footer>
  );
};
