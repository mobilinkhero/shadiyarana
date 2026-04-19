'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { FiStar, FiMapPin, FiHeart, FiShare2, FiPhone, FiMail, FiCheck, FiArrowLeft } from 'react-icons/fi';

interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  city: string;
  price_range: string;
  rating: number;
  reviews_count: number;
  description: string;
  is_verified: boolean;
  is_featured: boolean;
  phone: string;
  email: string;
  services: string[];
  portfolio_images: string[];
}

export default function VendorDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    fetch(`/api/vendors/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setVendor(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading vendor:', err);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading vendor details...</p>
        </div>
      </div>
    );
  }

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">Vendor not found</p>
          <Link href="/vendors" className="mt-4 inline-block text-red-800 hover:text-red-900">
            ← Back to vendors
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryPricing = () => {
    const category = vendor.category.toLowerCase();
    
    if (category.includes('photograph')) {
      return [
        { service: 'Wedding Day Coverage', price: 'PKR 50,000 - 200,000' },
        { service: 'Pre-Wedding Shoot', price: 'PKR 30,000 - 80,000' },
        { service: 'Engagement Shoot', price: 'PKR 20,000 - 50,000' },
        { service: 'Cinematic Video', price: 'PKR 40,000 - 150,000' },
        { service: 'Drone Coverage', price: 'PKR 15,000 - 40,000' },
        { service: 'Photo Album (Premium)', price: 'PKR 25,000 - 60,000' },
      ];
    } else if (category.includes('cater')) {
      return [
        { service: 'Per Person (Basic)', price: 'PKR 1,200 - 1,800' },
        { service: 'Per Person (Premium)', price: 'PKR 2,000 - 3,500' },
        { service: 'Per Person (Luxury)', price: 'PKR 4,000 - 6,000' },
        { service: 'Live Cooking Station', price: 'PKR 50,000 - 100,000' },
        { service: 'Dessert Bar', price: 'PKR 30,000 - 70,000' },
        { service: 'Welcome Drinks', price: 'PKR 20,000 - 50,000' },
      ];
    } else if (category.includes('venue')) {
      return [
        { service: 'Full Day Booking', price: 'PKR 250,000 - 500,000' },
        { service: 'Half Day Booking', price: 'PKR 150,000 - 300,000' },
        { service: 'Mehndi Function', price: 'PKR 100,000 - 200,000' },
        { service: 'Additional Hours', price: 'PKR 20,000/hour' },
      ];
    } else if (category.includes('makeup')) {
      return [
        { service: 'Bridal Makeup', price: 'PKR 30,000 - 80,000' },
        { service: 'Mehndi Makeup', price: 'PKR 15,000 - 35,000' },
        { service: 'Walima Makeup', price: 'PKR 20,000 - 50,000' },
        { service: 'Family Member', price: 'PKR 8,000 - 15,000' },
        { service: 'Hair Styling', price: 'PKR 5,000 - 12,000' },
        { service: 'Trial Session', price: 'PKR 10,000 - 20,000' },
      ];
    } else if (category.includes('decor')) {
      return [
        { service: 'Stage Decoration', price: 'PKR 80,000 - 250,000' },
        { service: 'Entrance Decor', price: 'PKR 40,000 - 100,000' },
        { service: 'Full Venue Setup', price: 'PKR 200,000 - 600,000' },
        { service: 'Mehndi Decor', price: 'PKR 60,000 - 150,000' },
        { service: 'Floral Arrangements', price: 'PKR 50,000 - 120,000' },
        { service: 'Lighting Setup', price: 'PKR 30,000 - 80,000' },
      ];
    }
    
    return [
      { service: 'Basic Package', price: vendor.price_range },
      { service: 'Premium Package', price: 'Contact for Quote' },
      { service: 'Custom Services', price: 'Varies' },
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-gradient-to-br from-red-200 to-amber-200">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100"
          >
            <FiArrowLeft className="text-xl" />
          </button>
          <div className="flex gap-2">
            <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100">
              <FiShare2 className="text-xl" />
            </button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100"
            >
              <FiHeart className={`text-xl ${isFavorite ? 'fill-red-600 text-red-600' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Vendor Info */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900">{vendor.name}</h1>
                {vendor.is_verified && (
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FiCheck className="text-sm" /> Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-lg text-sm font-semibold">
                  {vendor.category}
                </span>
                <div className="flex items-center gap-1">
                  <FiMapPin className="text-red-600" />
                  <span className="text-sm">{vendor.city}, {vendor.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                <FiStar className="fill-yellow-500" />
                <span className="text-2xl font-bold text-gray-900">{vendor.rating}</span>
              </div>
              <p className="text-sm text-gray-600">Rating</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">{vendor.reviews_count}</p>
              <p className="text-sm text-gray-600">Reviews</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-gray-900">150+</p>
              <p className="text-sm text-gray-600">Events</p>
            </div>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-xl border-2 border-red-200 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Starting from</p>
                <p className="text-3xl font-bold text-red-800">{vendor.price_range}</p>
              </div>
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-8">
              {['overview', 'pricing', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-2 font-semibold capitalize transition ${
                    activeTab === tab
                      ? 'text-red-800 border-b-2 border-red-800'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{vendor.description}</p>

              <h3 className="text-xl font-bold mb-4">Services Offered</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {vendor.services.map((service, index) => (
                  <span
                    key={index}
                    className="bg-red-50 text-red-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 border border-red-200"
                  >
                    <FiCheck className="text-red-600" />
                    {service}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {vendor.portfolio_images.map((img, index) => (
                  <div key={index} className="aspect-square bg-gradient-to-br from-red-200 to-amber-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Pricing & Services</h3>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                {getCategoryPricing().map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 ${
                      index !== getCategoryPricing().length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <span className="text-gray-700 font-medium">{item.service}</span>
                    <span className="text-red-800 font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="bg-gradient-to-r from-red-800 to-red-900 text-white p-8 rounded-xl text-center mb-6">
                <p className="text-sm opacity-90 mb-2">Overall Rating</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold">{vendor.rating}</span>
                  <FiStar className="text-3xl fill-white" />
                </div>
                <p className="text-sm opacity-90">Based on {vendor.reviews_count} reviews</p>
              </div>

              <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl mb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-800 font-bold">A</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Customer Name</p>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 px-3 py-1 rounded-lg">
                      <FiStar className="text-amber-500 fill-amber-500 text-sm" />
                      <span className="font-bold text-sm">5.0</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Absolutely amazing service! They made our wedding day perfect. Highly recommended!
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex gap-4">
          <button className="flex-1 bg-white border-2 border-red-800 text-red-800 py-3 rounded-xl font-semibold hover:bg-red-50 flex items-center justify-center gap-2">
            <FiPhone /> Contact
          </button>
          <button className="flex-1 bg-gradient-to-r from-red-800 to-red-900 text-white py-3 rounded-xl font-semibold hover:from-red-900 hover:to-red-950 flex items-center justify-center gap-2">
            <FiMail /> Book Now
          </button>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
