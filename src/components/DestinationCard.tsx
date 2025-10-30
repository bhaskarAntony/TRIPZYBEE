import React from 'react';
import { Heart, MapPin, IndianRupee } from 'lucide-react';
import { Destination } from '../types/destination';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const inWishlist = isInWishlist(destination.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(destination.id);
    } else {
      addToWishlist(destination);
    }
  };

  const handleExplore = () => {
    navigate(`/destination/${destination.id}`);
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="relative h-64 overflow-hidden" onClick={handleExplore}>
        <ImageWithFallback
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
        >
          <Heart
            size={20}
            className={inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
          />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-xl">{destination.name}</h3>
          <div className="flex items-center text-white/90 text-sm mt-1">
            <MapPin size={14} className="mr-1" />
            <span>{destination.region} India</span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.shortDescription}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IndianRupee size={18} className="text-[#FF9933]" />
            <span className="text-xl text-gray-800">{destination.price.toLocaleString()}</span>
            <span className="text-gray-500 text-sm ml-1">/person</span>
          </div>
          <Button
            onClick={handleExplore}
            className="bg-[#FF9933] hover:bg-[#E8842A]"
          >
            Explore Tour
          </Button>
        </div>
      </div>
    </div>
  );
};
