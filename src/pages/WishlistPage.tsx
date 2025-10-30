import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';
import { Heart, Trash2, IndianRupee } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="bg-[#FF9933] text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl mb-4">My Wishlist</h1>
            <p className="text-xl">Save your favorite destinations here</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Heart size={80} className="mx-auto text-gray-300 mb-6" />
          <h2 className="text-3xl mb-4 text-gray-700">Your wishlist is empty</h2>
          <p className="text-gray-600 text-lg mb-8">
            Start exploring destinations and add your favorites to your wishlist
          </p>
          <Button
            onClick={() => navigate('/destinations')}
            className="bg-gradient-to-r from-[#FF9933] to-[#E8842A] hover:from-[#E8842A] hover:to-[#FF9933] px-8 py-6 text-lg"
          >
            Explore Destinations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-[#FF9933] to-[#14B8A6] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">My Wishlist</h1>
          <p className="text-xl">{wishlist.length} destination{wishlist.length !== 1 ? 's' : ''} saved</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <div className="relative h-64">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(destination.id)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors"
                  title="Remove from wishlist"
                >
                  <Trash2 size={20} className="text-red-500" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{destination.shortDescription}</p>

                <div className="flex items-center mb-4">
                  <IndianRupee size={18} className="text-[#FF9933]" />
                  <span className="text-xl text-gray-800">{destination.price.toLocaleString()}</span>
                  <span className="text-gray-500 text-sm ml-1">/person</span>
                </div>

                <Button
                  onClick={() => navigate(`/destination/${destination.id}`)}
                  className="w-full bg-gradient-to-r from-[#FF9933] to-[#E8842A] hover:from-[#E8842A] hover:to-[#FF9933]"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
