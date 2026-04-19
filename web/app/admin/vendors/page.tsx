'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiStar } from 'react-icons/fi';

interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
  price_range: string;
  rating: number;
  reviews_count: number;
  is_verified: boolean;
  is_featured: boolean;
}

export default function VendorsManagementPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="text-red-800 hover:text-red-900">
              <FiArrowLeft className="text-2xl" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Vendor Management</h1>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-semibold">All Vendors</h3>
            <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900">
              Add New Vendor
            </button>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">Loading vendors...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Location</th>
                    <th className="px-6 py-3">Price Range</th>
                    <th className="px-6 py-3">Rating</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor) => (
                    <tr key={vendor.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{vendor.name}</td>
                      <td className="px-6 py-4">{vendor.category}</td>
                      <td className="px-6 py-4">{vendor.location}</td>
                      <td className="px-6 py-4">{vendor.price_range}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1">
                          <FiStar className="text-yellow-500 fill-yellow-500" />
                          <span>{vendor.rating}</span>
                          <span className="text-gray-500 text-sm">({vendor.reviews_count})</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {vendor.is_verified && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Verified</span>
                          )}
                          {vendor.is_featured && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Featured</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
