import React from 'react';
import { Star, Users, Shield, Leaf, Heart, Globe, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logoImage from 'figma:asset/d757522f96a43ad20a0312d1f813cc6fc6d85880.png';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Star className="text-[#FF9933]" size={40} />,
      title: 'Authentic',
      description: 'We provide genuine local experiences that showcase the real India, not just tourist traps.'
    },
    {
      icon: <Users className="text-[#14B8A6]" size={40} />,
      title: 'Affordable',
      description: 'Quality travel experiences at competitive prices with transparent pricing and no hidden costs.'
    },
    {
      icon: <Shield className="text-[#FF9933]" size={40} />,
      title: 'Safe',
      description: '24/7 customer support, verified local guides, and comprehensive travel insurance options.'
    },
    {
      icon: <Leaf className="text-[#14B8A6]" size={40} />,
      title: 'Sustainable',
      description: 'Committed to responsible tourism that benefits local communities and preserves heritage.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: '15 years of experience in tourism industry'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
      bio: 'Expert in customer experience & logistics'
    },
    {
      name: 'Amit Patel',
      role: 'Cultural Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300',
      bio: 'Historian specializing in Indian heritage'
    },
    {
      name: 'Sneha Reddy',
      role: 'Travel Curator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
      bio: 'Passionate about creating unique itineraries'
    }
  ];

  const stats = [
    { icon: <Users size={32} />, number: '50,000+', label: 'Happy Travelers' },
    { icon: <Globe size={32} />, number: '100+', label: 'Destinations' },
    { icon: <Award size={32} />, number: '4.9/5', label: 'Average Rating' },
    { icon: <TrendingUp size={32} />, number: '8+', label: 'Years of Excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#FF9933] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-24 w-24 rounded-full overflow-hidden bg-[#FEF3C7] mx-auto mb-6 shadow-lg">
            <img src={logoImage} alt="TripzyBee Logo" className="h-32 w-32 object-cover scale-150" style={{ objectPosition: 'center 40%' }} />
          </div>
          <h1 className="text-5xl mb-4">About TripzyBee</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Buzzing with passion to showcase the incredible diversity and rich heritage of India
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                TripzyBee was born from a simple dream: to help travelers discover the real India beyond the usual tourist circuits. Like a bee that knows where to find the sweetest nectar, we guide you to India's most authentic and enriching experiences.
              </p>
              <p>
                Founded in 2016, we started as a small team of travel enthusiasts who were passionate about Indian culture and heritage. We noticed that many travelers were missing out on the incredible diversity of experiences India has to offer - from hidden temples to village festivals, from local cuisine to traditional crafts.
              </p>
              <p>
                Today, TripzyBee has grown into a trusted travel partner for thousands of explorers worldwide. We've helped over 50,000 travelers create unforgettable memories across India, always staying true to our mission of promoting authentic, affordable, safe, and sustainable tourism.
              </p>
              <p>
                Our approach is simple: we work with local communities, support traditional artisans, and create itineraries that benefit both travelers and the destinations they visit. Every trip with TripzyBee is designed to be transformative, educational, and respectful of local cultures.
              </p>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800"
              alt="Travel India"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-[#FF9933] mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl mb-2 bg-gradient-to-r from-[#FF9933] to-[#14B8A6] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Our Values</h2>
          <p className="text-gray-600 text-lg">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-2xl mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="mx-auto text-[#FF9933] mb-6" size={60} />
          <h2 className="text-4xl mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To promote authentic Indian tourism by creating meaningful connections between travelers and local communities, 
            preserving cultural heritage, and ensuring that tourism benefits everyone - from the traveler seeking unique 
            experiences to the local artisan sharing their craft, from the tour guide telling ancient stories to the village 
            community welcoming visitors with open hearts.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Meet Our Team</h2>
          <p className="text-gray-600 text-lg">Passionate experts dedicated to your perfect journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-[#FF9933] mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#FF9933] to-[#14B8A6] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Ready to Explore India with Us?</h2>
          <p className="text-xl mb-8">
            Join thousands of happy travelers who've discovered the real India with TripzyBee
          </p>
          <a
            href="/destinations"
            className="inline-block bg-white text-[#FF9933] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};
