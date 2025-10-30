import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { destinations } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { Button } from '../components/ui/button';

type Region = 'All' | 'North' | 'South' | 'East' | 'West';

export const DestinationsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [selectedRegion, setSelectedRegion] = useState<Region>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const regions: Region[] = ['All', 'North', 'South', 'East', 'West'];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesRegion = selectedRegion === 'All' || destination.region === selectedRegion;
    const matchesSearch = searchQuery === '' || 
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#FF9933] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4">Explore Destinations</h1>
          <p className="text-xl">Discover the incredible diversity of India</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg mb-4">Filter by Region</h3>
          <div className="flex flex-wrap gap-3">
            {regions.map((region) => (
              <Button
                key={region}
                onClick={() => setSelectedRegion(region)}
                variant={selectedRegion === region ? 'default' : 'outline'}
                className={selectedRegion === region 
                  ? 'bg-[#FF9933] hover:bg-[#E8842A]'
                  : 'hover:bg-orange-50 hover:border-[#FF9933]'
                }
              >
                {region} India
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        {searchQuery && (
          <div className="mb-6">
            <p className="text-gray-600">
              Search results for: <span className="font-semibold text-[#FF9933]">"{searchQuery}"</span>
            </p>
          </div>
        )}

        {filteredDestinations.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
            <div className="mt-8 text-center text-gray-600">
              Showing {filteredDestinations.length} of {destinations.length} destinations
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">No destinations found matching your criteria.</p>
            <Button
              onClick={() => {
                setSelectedRegion('All');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#FF9933] hover:bg-[#E8842A]"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
