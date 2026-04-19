'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

interface Booking {
  id: number;
  user_name: string;
  vendor_name: string;
  event_date: string;
  event_location: string;
  guest_count: number;
  total_amount: number;
  status: string;
  created_at: string;
}

export default function BookingsManagementPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/bookings')
      .then(r => r.json())
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading bookings:', err);
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
            <h1 className="text-2xl font-bold text-gray-900">Booking Management</h1>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">All Bookings</h3>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">Loading bookings...</div>
          ) : bookings.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No bookings yet</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Vendor</th>
                    <th className="px-6 py-3">Event Date</th>
                    <th className="px-6 py-3">Location</th>
                    <th className="px-6 py-3">Guests</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Booked On</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4">#{booking.id}</td>
                      <td className="px-6 py-4 font-medium">{booking.user_name}</td>
                      <td className="px-6 py-4">{booking.vendor_name}</td>
                      <td className="px-6 py-4">{new Date(booking.event_date).toLocaleDateString()}</td>
                      <td className="px-6 py-4">{booking.event_location}</td>
                      <td className="px-6 py-4">{booking.guest_count}</td>
                      <td className="px-6 py-4 font-semibold">PKR {booking.total_amount.toLocaleString()}</td>
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
                      <td className="px-6 py-4">{new Date(booking.created_at).toLocaleDateString()}</td>
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
