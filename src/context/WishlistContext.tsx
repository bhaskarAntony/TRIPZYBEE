import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Destination } from '../types/destination';

interface WishlistContextType {
  wishlist: Destination[];
  addToWishlist: (destination: Destination) => void;
  removeFromWishlist: (destinationId: string) => void;
  isInWishlist: (destinationId: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<Destination[]>([]);

  const addToWishlist = (destination: Destination) => {
    setWishlist(prev => {
      if (prev.find(item => item.id === destination.id)) {
        return prev;
      }
      return [...prev, destination];
    });
  };

  const removeFromWishlist = (destinationId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== destinationId));
  };

  const isInWishlist = (destinationId: string) => {
    return wishlist.some(item => item.id === destinationId);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
