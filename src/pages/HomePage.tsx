import React, { useState } from 'react';
import { Search, Star, Users, Shield, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const popularDestinations = destinations.slice(0, 6);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'TripzyBee made our Kerala trip unforgettable! The houseboat experience was magical, and everything was perfectly organized.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      text: 'Amazing experience in Ladakh! The team handled everything professionally. Highly recommend for adventure seekers.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad',
      rating: 5,
      text: 'Our family trip to Jaipur was wonderful. The cultural experiences and local guides made it truly special.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150'
    }
  ];

  const culturalHighlights = [
    {
      title: 'Vibrant Festivals',
      description: 'Experience Diwali, Holi, Durga Puja, and more',
      image: 'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?w=600',
      icon: '🎊'
    },
    {
      title: 'Rich Cuisine',
      description: 'Savor diverse flavors from every region',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600',
      icon: '🍛'
    },
    {
      title: 'Ancient Arts',
      description: 'Discover classical dance, music, and crafts',
      image: 'https://images.unsplash.com/photo-1545565413-89f1c6c13c4e?w=600',
      icon: '🎭'
    },
    {
      title: 'Spiritual Heritage',
      description: 'Visit sacred temples and spiritual sites',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600',
      icon: '🕉️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920"
            alt="India Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">
            Discover India's Beauty & Culture with TripzyBee
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore incredible destinations, rich heritage, and unforgettable experiences
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex gap-2 bg-white rounded-full p-2 shadow-2xl">
              <div className="flex-1 flex items-center px-4">
                <Search className="text-gray-400 mr-2" size={20} />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                className="rounded-full px-8 bg-[#FF9933] hover:bg-[#E8842A]"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Popular Destinations</h2>
          <p className="text-gray-600 text-lg">Explore the most loved places in India</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => navigate('/destinations')}
            className="bg-[#FF9933] hover:bg-[#E8842A] px-8 py-6 text-lg"
          >
            View All Destinations
          </Button>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Cultural Highlights</h2>
            <p className="text-gray-600 text-lg">Immerse yourself in India's rich traditions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalHighlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Why Choose TripzyBee?</h2>
          <p className="text-gray-600 text-lg">Your trusted partner for authentic Indian experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Star className="text-[#FF9933]" size={40} />,
              title: 'Authentic',
              description: 'Genuine local experiences and cultural immersion'
            },
            {
              icon: <Users className="text-[#14B8A6]" size={40} />,
              title: 'Affordable',
              description: 'Best prices with no hidden charges'
            },
            {
              icon: <Shield className="text-[#FF9933]" size={40} />,
              title: 'Safe',
              description: '24/7 support and trusted local partners'
            },
            {
              icon: <Leaf className="text-[#14B8A6]" size={40} />,
              title: 'Sustainable',
              description: 'Responsible tourism supporting local communities'
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Travelers Say</h2>
            <p className="text-gray-600 text-lg">Real experiences from real travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
