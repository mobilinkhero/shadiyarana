'use client';

import { FiCalendar, FiDollarSign, FiStar, FiMessageSquare } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface VendorStats {
  totalBookings: number;
  totalRevenue: number;
  averageRating: string;
  messagesCount: number;
}

interface Booking {
  id: number;
  user_name: string;
  event_date: string;
  total_amount: number;
  status: string;
}

export default function VendorDashboard() {
  const [stats, setStats] = useState<VendorStats>({ totalBookings: 0, totalRevenue: 0, averageRating: '0.0', messagesCount: 0 });
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  
  // In a real app, get this from auth context
  const vendorId = 1; // photographer1@example.com's vendor ID

  useEffect(() => {
    Promise.all([
      fetch(`/api/vendor-stats/${vendorId}`).then(r => r.json()),
      fetch('/api/bookings').then(r => r.json())
    ]).then(([statsData, bookingsData]) => {
      setStats(statsData);
      // Filter bookings for this vendor
      setBookings(bookingsData.filter((b: any) => b.vendor_id === vendorId).slice(0, 5));
      setLoading(false);
    }).catch(err => {
      console.error('Error loading data:', err);
      setLoading(false);
    });
  }, [vendorId]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold text-red-800">Shadiyarana</Link>
            <span className="text-gray-400">|</span>
            <h1 className="text-xl font-semibold text-gray-900">Vendor Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">photographer1@example.com</span>
            <button className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        {loading ? (
          <div className="text-center py-8">Loading stats...</div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Bookings</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalBookings}</p>
                </div>
                <FiCalendar className="text-4xl text-blue-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">PKR {stats.totalRevenue.toLocaleString()}</p>
                </div>
                <FiDollarSign className="text-4xl text-green-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Average Rating</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.averageRating}</p>
                </div>
                <FiStar className="text-4xl text-yellow-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Messages</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.messagesCount}</p>
                </div>
                <FiMessageSquare className="text-4xl text-red-500" />
              </div>
            </div>
          </div>
        )}

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-6 text-center">Loading bookings...</div>
            ) : bookings.length === 0 ? (
              <div className="p-6 text-center text-gray-500">No bookings yet</div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Event Date</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">{booking.user_name}</td>
                      <td className="px-6 py-4">{new Date(booking.event_date).toLocaleDateString()}</td>
                      <td className="px-6 py-4">PKR {booking.total_amount.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
