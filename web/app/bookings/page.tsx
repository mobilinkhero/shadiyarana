'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCalendar, FiDollarSign, FiPhone, FiInfo, FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi';

export default function BookingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        vendor: 'Royal Palace Banquet',
        category: 'Venue',
        date: 'Dec 25, 2024',
        amount: 'PKR 500,000',
        status: 'confirmed'
      },
      {
        id: 2,
        vendor: 'Elegant Caterers',
        category: 'Catering',
        date: 'Dec 25, 2024',
        amount: 'PKR 200,000',
        status: 'confirmed'
      },
      {
        id: 3,
        vendor: 'Perfect Moments Photography',
        category: 'Photography',
        date: 'Dec 25, 2024',
        amount: 'PKR 150,000',
        status: 'pending'
      },
    ],
    completed: [
      {
        id: 4,
        vendor: 'Bridal Makeup Studio',
        category: 'Makeup',
        date: 'Nov 15, 2024',
        amount: 'PKR 50,000',
        status: 'completed'
      },
    ],
    cancelled: []
  };

  const getBookings = () => {
    return bookings[activeTab as keyof typeof bookings] || [];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-red-800">Shadiyarana</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-800">Home</Link>
            <Link href="/vendors" className="text-gray-700 hover:text-red-800">Vendors</Link>
            <Link href="/favorites" className="text-gray-700 hover:text-red-800">Favorites</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">My Bookings</h1>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm p-2 mb-8 flex gap-2">
          {['upcoming', 'completed', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold capitalize transition ${
                activeTab === tab
                  ? 'bg-red-800 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        {getBookings().length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              {activeTab === 'upcoming' ? (
                <FiClock className="text-4xl text-gray-400" />
              ) : activeTab === 'completed' ? (
                <FiCheckCircle className="text-4xl text-gray-400" />
              ) : (
                <FiXCircle className="text-4xl text-gray-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No {activeTab} bookings</h3>
            <p className="text-gray-600 mb-6">You don't have any {activeTab} bookings yet</p>
            <Link
              href="/vendors"
              className="inline-block bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-900"
            >
              Browse Vendors
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {getBookings().map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Header */}
                <div className={`p-4 ${
                  booking.status === 'confirmed' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  booking.status === 'pending' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600' :
                  booking.status === 'completed' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  'bg-gradient-to-r from-gray-500 to-gray-600'
                }`}>
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      {booking.status === 'confirmed' ? <FiCheckCircle /> :
                       booking.status === 'pending' ? <FiClock /> :
                       booking.status === 'completed' ? <FiCheckCircle /> :
                       <FiXCircle />}
                      <h3 className="font-bold text-lg">{booking.vendor}</h3>
                    </div>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {booking.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <FiCalendar className="text-red-800 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Event Date</p>
                        <p className="font-semibold text-gray-900">{booking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <FiDollarSign className="text-amber-600 text-xl" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Amount</p>
                        <p className="font-semibold text-gray-900">{booking.amount}</p>
                      </div>
                    </div>
                  </div>

                  {activeTab === 'upcoming' && (
                    <div className="flex gap-3">
                      <button className="flex-1 border-2 border-red-800 text-red-800 py-2 rounded-lg font-semibold hover:bg-red-50 flex items-center justify-center gap-2">
                        <FiPhone /> Contact
                      </button>
                      <button className="flex-1 bg-red-800 text-white py-2 rounded-lg font-semibold hover:bg-red-900 flex items-center justify-center gap-2">
                        <FiInfo /> Details
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
