import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { Heart, Share2, MapPin, Calendar, Clock, Users, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Calendar as CalendarComponent } from '../components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { PaymentModal } from '../components/PaymentModal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { format } from 'date-fns';

export const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === id);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: 1,
    travelDate:''
  });
  // const [travelDate, setTravelDate] = useState<Date | undefined>(undefined);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Destination not found</h2>
          <Button onClick={() => navigate('/destinations')}>Back to Destinations</Button>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(destination.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(destination.id);
    } else {
      addToWishlist(destination);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `TripzyBee - ${destination.name}`,
        text: `Check out this amazing destination: ${destination.name}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.gallery.length) % destination.gallery.length);
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    
    // if (!travelDate) {
    //   alert('Please select a travel date');
    //   return;
    // }

    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    setShowPaymentModal(true);
  };

  const totalAmount = destination.price * formData.travelers;

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[500px]">
        <ImageWithFallback
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center text-white/90 mb-2">
              <MapPin size={20} className="mr-2" />
              <span>{destination.region} India</span>
            </div>
            <h1 className="text-5xl text-white mb-4">{destination.name}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{destination.description}</p>
          </div>
        </div>
        <div className="absolute top-8 right-8 flex gap-3">
          <button
            onClick={handleWishlistToggle}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <Heart
              size={24}
              className={inWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}
            />
          </button>
          <button
            onClick={handleShare}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <Share2 size={24} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl mb-6">Gallery</h2>
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={destination.gallery[currentImageIndex]}
                    alt={`${destination.name} ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="flex gap-2 mt-4 overflow-x-auto">
                  {destination.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-[#FF9933]' : 'border-transparent'
                      }`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* History & Culture */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl mb-4">History</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{destination.history}</p>
              
              <h2 className="text-3xl mb-4">Culture</h2>
              <p className="text-gray-700 leading-relaxed">{destination.culture}</p>
            </div>

            {/* Must Visit Places */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl mb-4">Must-Visit Places</h2>
              <ul className="space-y-3">
                {destination.mustVisit.map((place, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-[#FF9933] text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{place}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-[#FF9933] mr-3" size={28} />
                <h2 className="text-3xl">Best Time to Visit</h2>
              </div>
              <p className="text-gray-700 text-lg">{destination.bestTime}</p>
            </div>

            {/* Local Experiences */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl mb-4">Local Experiences</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.localExperiences.map((experience, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-gradient-to-br from-orange-50 to-teal-50 rounded-lg"
                  >
                    <span className="text-2xl mr-3">✨</span>
                    <span className="text-gray-700">{experience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center text-3xl text-[#FF9933]">
                    <IndianRupee size={28} />
                    <span>{destination.price.toLocaleString()}</span>
                  </div>
                  <p className="text-gray-600">per person</p>
                </div>
              </div>

              <form onSubmit={handleBookNow} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="travelers">Number of Travelers *</Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    max="20"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                    required
                  />
                </div>

                <div>
                  <Label>Travel Date *</Label>
                  <Input
                    id="travelDate"
                    type="date"
                   
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    required
                  />
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Total Amount:</span>
                    <div className="flex items-center text-2xl text-[#FF9933]">
                      <IndianRupee size={22} />
                      <span>{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#FF9933] hover:bg-[#E8842A] py-6 text-lg"
                  >
                    Book Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        amount={totalAmount}
        destinationName={destination.name}
        travelDate={new Date(formData.travelDate) || null}
        travelers={formData.travelers}
      />
    </div>
  );
};
