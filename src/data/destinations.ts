import { Destination } from '../types/destination';

export const destinations: Destination[] = [
  {
    id: 'goa',
    name: 'Goa',
    region: 'West',
    image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMEluZGlhfGVufDF8fHx8MTc2MTc0MjU3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Sun, sand, and sea - India\'s beach paradise',
    description: 'Goa is famous for its pristine beaches, vibrant nightlife, Portuguese heritage, and delicious seafood.',
    price: 15999,
    history: 'Goa was a Portuguese colony for over 450 years, which has left a unique cultural and architectural imprint. The region showcases a blend of Indian and Portuguese influences in its churches, forts, and cuisine.',
    culture: 'Goan culture is a harmonious blend of Indian and Portuguese traditions. The state is known for its vibrant festivals, including Carnival and Shigmo, its distinctive music and dance forms, and its unique cuisine that combines local spices with Portuguese techniques.',
    mustVisit: [
      'Baga Beach - Popular beach with water sports',
      'Basilica of Bom Jesus - UNESCO World Heritage Site',
      'Fort Aguada - 17th-century Portuguese fort',
      'Dudhsagar Falls - Majestic four-tiered waterfall',
      'Anjuna Flea Market - Shopping and local culture'
    ],
    bestTime: 'November to February - Pleasant weather perfect for beach activities',
    localExperiences: [
      'Sunset cruise on Mandovi River',
      'Traditional Goan cooking class',
      'Dolphin watching tour',
      'Spice plantation visit',
      'Beach shack hopping'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1080',
      'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1080'
    ]
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1671520427644-33aaf3be7214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYWlwdXIlMjBwYWxhY2UlMjBJbmRpYXxlbnwxfHx8fDE3NjE3MjkzNzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'The Pink City - Royal heritage and majestic palaces',
    description: 'The capital of Rajasthan, known for its magnificent forts, palaces, and rich cultural heritage.',
    price: 12999,
    history: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is one of India\'s first planned cities. The city was painted pink in 1876 to welcome Prince Albert, and the tradition continues to this day, earning it the nickname "Pink City".',
    culture: 'Jaipur is the heart of Rajasthani culture, known for its traditional arts, crafts, jewelry, textiles, and cuisine. The city celebrates numerous festivals with great pomp, including the Jaipur Literature Festival and the vibrant Gangaur festival.',
    mustVisit: [
      'Amber Fort - Magnificent hilltop fortress',
      'Hawa Mahal - Iconic Palace of Winds',
      'City Palace - Royal residence with museums',
      'Jantar Mantar - UNESCO World Heritage astronomical observatory',
      'Nahargarh Fort - Panoramic city views'
    ],
    bestTime: 'October to March - Cool and pleasant weather',
    localExperiences: [
      'Elephant ride at Amber Fort',
      'Traditional Rajasthani dinner with folk performance',
      'Block printing workshop',
      'Gem and jewelry shopping in Johari Bazaar',
      'Hot air balloon ride over the city'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1671520427644-33aaf3be7214?w=1080',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1080',
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1080'
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    region: 'South',
    image: 'https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwSW5kaWF8ZW58MXx8fHwxNzYxNzE0NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'God\'s Own Country - Serene backwaters and lush greenery',
    description: 'Kerala offers a unique blend of backwaters, beaches, hill stations, and Ayurvedic wellness.',
    price: 18999,
    history: 'Kerala has a rich history dating back to 3rd century BCE, with influences from various cultures including Arab, Chinese, Dutch, and British traders. The region was known for its spice trade and was a major center of commerce in ancient times.',
    culture: 'Kerala\'s culture is deeply rooted in its traditions, with classical art forms like Kathakali dance, Mohiniyattam, and Theyyam. The state is known for its progressive society, high literacy rate, and the ancient healing system of Ayurveda.',
    mustVisit: [
      'Alleppey Backwaters - Houseboat experience',
      'Munnar - Tea plantations and hill station',
      'Periyar Wildlife Sanctuary - Elephant spotting',
      'Fort Kochi - Colonial heritage',
      'Varkala Beach - Cliff beach paradise'
    ],
    bestTime: 'September to March - Pleasant weather for backwater tours',
    localExperiences: [
      'Houseboat stay in backwaters',
      'Ayurvedic spa and massage',
      'Kathakali dance performance',
      'Tea plantation tour',
      'Traditional Kerala Sadya meal on banana leaf'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1680599022555-57fb95b64b5c?w=1080',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1080',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1080'
    ]
  },
  {
    id: 'manali',
    name: 'Manali',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1597167231350-d057a45dc868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBtb3VudGFpbnMlMjBJbmRpYXxlbnwxfHx8fDE3NjE3MTQ0MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Himalayan paradise - Adventure and scenic beauty',
    description: 'A popular hill station nestled in the mountains of Himachal Pradesh, perfect for adventure lovers.',
    price: 16999,
    history: 'Named after the sage Manu, Manali has been a significant place in Hindu mythology. The region was an important stop on the ancient trade route to Ladakh and has evolved from a quiet hamlet to a bustling tourist destination.',
    culture: 'Manali reflects the rich Himachali culture with its traditional wooden architecture, Buddhist monasteries, and Hindu temples. The local Pahari culture is evident in folk music, dance, and traditional festivals like Dussehra celebrated with unique customs.',
    mustVisit: [
      'Rohtang Pass - Snow-capped mountain pass',
      'Solang Valley - Adventure sports hub',
      'Hadimba Temple - Ancient wooden temple',
      'Old Manali - Bohemian cafes and culture',
      'Vashisht Hot Springs - Natural thermal springs'
    ],
    bestTime: 'October to June - Pleasant for sightseeing; December to February for snow',
    localExperiences: [
      'Paragliding in Solang Valley',
      'River rafting in Beas River',
      'Trek to Jogini Falls',
      'Visit Tibetan monasteries',
      'Shopping for woolens and handicrafts at Mall Road'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1597167231350-d057a45dc868?w=1080',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1080',
      'https://images.unsplash.com/photo-1605649487212-47a921f49d1f?w=1080'
    ]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1651081310524-a6bdbc90997c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYXJhbmFzaSUyMEluZGlhfGVufDF8fHx8MTc2MTc0MjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'The Spiritual Capital - Ancient city of enlightenment',
    description: 'One of the world\'s oldest living cities, Varanasi is the spiritual heart of India.',
    price: 11999,
    history: 'Varanasi is one of the oldest continuously inhabited cities in the world, with a history spanning over 3,000 years. Known as Kashi in ancient times, it has been a center of learning, culture, and spirituality throughout the ages.',
    culture: 'Varanasi is the cultural and spiritual capital of India. The city is synonymous with Hindu philosophy, yoga, music, and art. It\'s believed that dying here and being cremated on the banks of the Ganges brings salvation (moksha).',
    mustVisit: [
      'Dashashwamedh Ghat - Evening Ganga Aarti',
      'Kashi Vishwanath Temple - Sacred Shiva temple',
      'Sarnath - Buddhist pilgrimage site',
      'Assi Ghat - Yoga and culture hub',
      'Banaras Hindu University - Historic campus'
    ],
    bestTime: 'October to March - Cool and pleasant for exploring ghats',
    localExperiences: [
      'Sunrise boat ride on Ganges',
      'Witness Ganga Aarti ceremony',
      'Classical music concert',
      'Silk weaving workshop',
      'Street food tour in old city lanes'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1651081310524-a6bdbc90997c?w=1080',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1080',
      'https://images.unsplash.com/photo-1567157577867-cc5f0c6b9a3c?w=1080'
    ]
  },
  {
    id: 'leh-ladakh',
    name: 'Leh Ladakh',
    region: 'North',
    image: 'https://images.unsplash.com/photo-1636790132954-b0a7467c308b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMZWglMjBMYWRha2glMjBtb3VudGFpbnN8ZW58MXx8fHwxNzYxNzQyNTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    shortDescription: 'Land of High Passes - Breathtaking landscapes',
    description: 'A high-altitude desert offering stunning mountain vistas, Buddhist monasteries, and adventure.',
    price: 24999,
    history: 'Ladakh was an important stop on the ancient Silk Route, facilitating trade between India, Tibet, and Central Asia. The region has a rich Buddhist heritage dating back over a thousand years, with influences from Tibetan culture.',
    culture: 'Ladakhi culture is predominantly Buddhist with strong Tibetan influences. The region is dotted with ancient monasteries, prayer flags, and stupas. Traditional festivals like Hemis and Losar are celebrated with masked dances and rituals.',
    mustVisit: [
      'Pangong Lake - Crystal blue high-altitude lake',
      'Nubra Valley - Sand dunes and double-humped camels',
      'Thiksey Monastery - Stunning Buddhist monastery',
      'Khardung La - One of the highest motorable passes',
      'Magnetic Hill - Gravity-defying phenomenon'
    ],
    bestTime: 'May to September - Roads are accessible and weather is pleasant',
    localExperiences: [
      'Bike ride on world\'s highest motorable roads',
      'Camping under stars at Pangong Lake',
      'Visit Buddhist monasteries and interact with monks',
      'Traditional Ladakhi food experience',
      'River rafting in Zanskar River'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1636790132954-b0a7467c308b?w=1080',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1080',
      'https://images.unsplash.com/photo-1571331279359-ca8b5c339e00?w=1080'
    ]
  }
];
