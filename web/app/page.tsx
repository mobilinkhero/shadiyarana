'use client';

import Link from 'next/link';
import { FiSearch, FiHeart, FiCalendar, FiStar, FiMapPin, FiDollarSign } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  price_range: string;
  rating: number;
  reviews_count: number;
  image_url: string;
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

export default function HomePage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/vendors').then(r => r.json()),
      fetch('/api/categories').then(r => r.json())
    ]).then(([vendorsData, categoriesData]) => {
      setVendors(vendorsData.slice(0, 6));
      setCategories(categoriesData);
      setLoading(false);
    }).catch(err => {
      console.error('Error loading data:', err);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-800">Shadiyarana</h1>
          <nav className="flex gap-6">
            <Link href="/vendors" className="text-gray-700 hover:text-red-800">Vendors</Link>
            <Link href="/categories" className="text-gray-700 hover:text-red-800">Categories</Link>
            <Link href="/login" className="text-gray-700 hover:text-red-800">Login</Link>
            <Link href="/admin" className="text-sm text-gray-500 hover:text-red-800">Admin</Link>
            <Link href="/vendor" className="text-sm text-gray-500 hover:text-red-800">Vendor Portal</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-2">Find Your Perfect</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Wedding Vendors
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connect with the best photographers, venues, caterers, and more for your dream wedding
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex mb-12">
          <div className="flex-1 flex items-center px-4">
            <div className="w-10 h-10 bg-gradient-to-r from-red-800 to-red-900 rounded-full flex items-center justify-center mr-3">
              <FiSearch className="text-white" />
            </div>
            <input
              type="text"
              placeholder="Search vendors..."
              className="flex-1 outline-none"
            />
          </div>
          <button className="bg-red-100 text-red-800 px-6 py-3 rounded-full hover:bg-red-200 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>

        {/* Trending Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {['New Venues', 'Top Rated', 'Trending', 'Offers', 'Decor', 'Catering', 'Makeup', 'Photos'].map((story, index) => (
              <div key={index} className="flex-shrink-0">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-amber-400 p-1">
                    <div className="w-full h-full rounded-full bg-white p-1">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-red-200 to-amber-200 flex items-center justify-center">
                        <span className="text-2xl">🎉</span>
                      </div>
                    </div>
                  </div>
                  {index < 4 && (
                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <p className="text-xs text-center mt-2 font-medium">{story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/checklist" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiCalendar className="text-2xl text-blue-600" />
            </div>
            <h3 className="font-semibold">Checklist</h3>
          </Link>

          <Link href="/budget" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiDollarSign className="text-2xl text-green-600" />
            </div>
            <h3 className="font-semibold">Budget</h3>
          </Link>

          <Link href="/favorites" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiHeart className="text-2xl text-red-600" />
            </div>
            <h3 className="font-semibold">Favorites</h3>
          </Link>

          <Link href="/bookings" className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <FiCalendar className="text-2xl text-purple-600" />
            </div>
            <h3 className="font-semibold">Bookings</h3>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        {loading ? (
          <div className="text-center">Loading categories...</div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold">{cat.name}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Featured Vendors */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Vendors</h2>
        {loading ? (
          <div className="text-center">Loading vendors...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-200 to-amber-200 flex items-center justify-center">
                  <span className="text-6xl">📸</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vendor.name}</h3>
                  <p className="text-gray-600 mb-2">{vendor.category}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FiMapPin className="text-red-600" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{vendor.rating}</span>
                      <span className="text-gray-500 text-sm">({vendor.reviews_count})</span>
                    </div>
                    <span className="text-red-800 font-semibold">{vendor.price_range}</span>
                  </div>
                  <button className="w-full mt-4 bg-red-800 text-white py-2 rounded-lg hover:bg-red-900">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link href="/vendors" className="inline-block bg-red-800 text-white px-8 py-3 rounded-lg hover:bg-red-900">
            View All Vendors
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Shadiyarana</h3>
          <p className="text-gray-400">Your one-stop wedding vendor marketplace</p>
          <div className="mt-6 flex justify-center gap-6">
            <Link href="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
