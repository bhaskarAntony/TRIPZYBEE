import React from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const CulturePage: React.FC = () => {
  const sections = [
    {
      title: 'Festivals',
      icon: '🎊',
      description: 'India is a land of festivals, celebrated with immense joy and fervor throughout the year.',
      image: 'https://images.unsplash.com/photo-1590906424086-3dbc808fd54b?w=800',
      content: [
        {
          name: 'Diwali',
          detail: 'The Festival of Lights celebrated with lamps, fireworks, and sweets across the country.'
        },
        {
          name: 'Holi',
          detail: 'The Festival of Colors where people play with colored powders and water, celebrating the victory of good over evil.'
        },
        {
          name: 'Durga Puja',
          detail: 'A grand celebration in Eastern India honoring Goddess Durga with elaborate pandals and cultural programs.'
        },
        {
          name: 'Eid',
          detail: 'Celebrated by Muslims nationwide with prayers, feasts, and acts of charity.'
        },
        {
          name: 'Onam',
          detail: 'Kerala\'s harvest festival featuring boat races, flower carpets (pookalam), and traditional Sadya feast.'
        }
      ]
    },
    {
      title: 'Food',
      icon: '🍛',
      description: 'Indian cuisine is a magnificent tapestry of flavors, spices, and cooking techniques varying by region.',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
      content: [
        {
          name: 'North Indian',
          detail: 'Rich gravies, tandoori dishes, naan, butter chicken, dal makhani, and aromatic biryanis.'
        },
        {
          name: 'South Indian',
          detail: 'Rice-based dishes like dosa, idli, uttapam, sambar, and coconut-based curries.'
        },
        {
          name: 'West Indian',
          detail: 'Dhokla, vada pav, Goan fish curry, and the diverse flavors of Gujarati and Maharashtrian cuisine.'
        },
        {
          name: 'East Indian',
          detail: 'Fish preparations, rosogolla, sandesh, and the unique flavors of Bengali and Odia cuisines.'
        },
        {
          name: 'Street Food',
          detail: 'Chaat, pani puri, pav bhaji, kebabs, and countless regional specialties found at every corner.'
        }
      ]
    },
    {
      title: 'Handicrafts',
      icon: '🎨',
      description: 'India\'s handicraft tradition spans thousands of years, with each region offering unique artisanal products.',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800',
      content: [
        {
          name: 'Textiles',
          detail: 'Silk sarees from Kanchipuram, Banarasi brocades, Kashmiri pashminas, and Rajasthani block prints.'
        },
        {
          name: 'Pottery',
          detail: 'Blue pottery from Jaipur, terracotta from Bengal, and Khurja ceramics from Uttar Pradesh.'
        },
        {
          name: 'Metalwork',
          detail: 'Bidriware from Karnataka, brass items from Moradabad, and intricate silver filigree from Odisha.'
        },
        {
          name: 'Wood & Stone',
          detail: 'Sandalwood carvings from Mysore, stone sculptures from Tamil Nadu, and wooden toys from Channapatna.'
        },
        {
          name: 'Jewelry',
          detail: 'Kundan and meenakari from Rajasthan, temple jewelry from South India, and tribal silver ornaments.'
        }
      ]
    },
    {
      title: 'Traditions',
      icon: '🕉️',
      description: 'Indian traditions are deeply rooted in spirituality, family values, and respect for nature and elders.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
      content: [
        {
          name: 'Yoga & Meditation',
          detail: 'Ancient practices originating in India for physical, mental, and spiritual well-being.'
        },
        {
          name: 'Classical Arts',
          detail: 'Dance forms like Bharatanatyam, Kathak, Odissi, and music traditions including Hindustani and Carnatic.'
        },
        {
          name: 'Ayurveda',
          detail: 'The traditional system of medicine using natural herbs and holistic healing practices.'
        },
        {
          name: 'Namaste',
          detail: 'The traditional greeting with folded hands, showing respect and acknowledging the divine in others.'
        },
        {
          name: 'Joint Family System',
          detail: 'Multiple generations living together, sharing responsibilities and maintaining strong family bonds.'
        }
      ]
    },
    {
      title: 'Local Stories',
      icon: '📖',
      description: 'Every corner of India has fascinating tales passed down through generations.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800',
      content: [
        {
          name: 'Ramayana & Mahabharata',
          detail: 'Epic narratives that teach moral values and continue to influence Indian culture and philosophy.'
        },
        {
          name: 'Panchatantra',
          detail: 'Ancient collection of fables featuring animals, teaching wisdom and practical life lessons.'
        },
        {
          name: 'Folk Tales',
          detail: 'Regional stories like Birbal\'s wit, Tenali Rama\'s cleverness, and countless regional legends.'
        },
        {
          name: 'Sufi & Bhakti Traditions',
          detail: 'Devotional poetry and music that transcend religious boundaries and celebrate divine love.'
        },
        {
          name: 'Village Legends',
          detail: 'Local deities, brave warriors, and cultural heroes celebrated through oral traditions and festivals.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#FF9933] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-4 text-white">Culture & Heritage</h1>
          <p className="text-xl text-white">Discover the rich tapestry of Indian traditions, arts, and stories</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`mb-16 ${
              index % 2 === 0 ? '' : ''
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:grid-flow-dense'}`}>
                {/* Image */}
                <div className={`relative h-80 lg:h-auto ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <ImageWithFallback
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-4xl">
                    {section.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <h2 className="text-4xl mb-4">{section.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{section.description}</p>
                  
                  <div className="space-y-4">
                    {section.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-orange-50 to-teal-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h4 className="font-semibold text-lg text-[#FF9933] mb-1">{item.name}</h4>
                        <p className="text-gray-700">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-[#FF9933] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-4">Experience India's Living Heritage</h2>
          <p className="text-xl mb-8">
            Join us on a journey to discover the authentic traditions, flavors, and stories that make India truly incredible.
          </p>
          <a
            href="/destinations"
            className="inline-block bg-white text-[#FF9933] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Explore Our Tours
          </a>
        </div>
      </div>
    </div>
  );
};
