'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FiHeart, FiStar, FiMapPin, FiTrash2 } from 'react-icons/fi';

interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  price_range: string;
  rating: number;
  reviews_count: number;
  is_verified: boolean;
}

export default function FavoritesPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch user's favorites from API
    fetch('/api/vendors')
      .then(r => r.json())
      .then(data => {
        setVendors(data.slice(0, 3)); // Mock: show first 3 as favorites
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading favorites:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-red-800">Shadiyarana</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-800">Home</Link>
            <Link href="/vendors" className="text-gray-700 hover:text-red-800">Vendors</Link>
            <Link href="/bookings" className="text-gray-700 hover:text-red-800">Bookings</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Favorites</h1>
          {vendors.length > 0 && (
            <button className="text-red-600 hover:text-red-800 flex items-center gap-2">
              <FiTrash2 /> Clear All
            </button>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading favorites...</p>
          </div>
        ) : vendors.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiHeart className="text-4xl text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Favorites Yet</h3>
            <p className="text-gray-600 mb-6">Start adding vendors to your favorites</p>
            <Link
              href="/vendors"
              className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900"
            >
              Browse Vendors
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor) => (
              <div key={vendor.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-200 to-amber-200 flex items-center justify-center relative">
                  <span className="text-6xl">📸</span>
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-lg hover:bg-red-50">
                    <FiHeart className="text-red-600 fill-red-600" />
                  </button>
                  {vendor.is_verified && (
                    <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      ✓ Verified
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{vendor.name}</h3>
                  <p className="text-gray-600 mb-2">{vendor.category}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FiMapPin className="text-red-600" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <FiStar className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{vendor.rating}</span>
                      <span className="text-gray-500 text-sm">({vendor.reviews_count})</span>
                    </div>
                    <span className="text-red-800 font-semibold">{vendor.price_range}</span>
                  </div>
                  <Link
                    href={`/vendor/${vendor.id}`}
                    className="block w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-900 text-center font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
