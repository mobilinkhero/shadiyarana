'use client';

import Link from 'next/link';
import { FiStar, FiMapPin, FiSearch } from 'react-icons/fi';
import { useEffect, useState } from 'react';

interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  price_range: string;
  rating: number;
  reviews_count: number;
  description: string;
  is_verified: boolean;
  is_featured: boolean;
}

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/vendors')
      .then(r => r.json())
      .then(data => {
        setVendors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading vendors:', err);
        setLoading(false);
      });
  }, []);

  const filteredVendors = vendors.filter(v => 
    v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    v.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-red-800">Shadiyarana</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-800">Home</Link>
            <Link href="/categories" className="text-gray-700 hover:text-red-800">Categories</Link>
            <Link href="/login" className="text-gray-700 hover:text-red-800">Login</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Vendors</h1>
          <p className="text-gray-600">Browse through our verified wedding vendors</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search by name, category, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Vendors Grid */}
        {loading ? (
          <div className="text-center py-12">Loading vendors...</div>
        ) : filteredVendors.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No vendors found</div>
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? 's' : ''}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVendors.map((vendor) => (
                <div key={vendor.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-red-200 to-amber-200 flex items-center justify-center relative">
                    <span className="text-6xl">📸</span>
                    {vendor.is_featured && (
                      <span className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                    {vendor.is_verified && (
                      <span className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{vendor.name}</h3>
                    <p className="text-gray-600 mb-2">{vendor.category}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <FiMapPin className="text-red-600" />
                      {vendor.location}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{vendor.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <FiStar className="text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{vendor.rating}</span>
                        <span className="text-gray-500 text-sm">({vendor.reviews_count})</span>
                      </div>
                      <span className="text-red-800 font-semibold">{vendor.price_range}</span>
                    </div>
                    <button className="w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-900">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
