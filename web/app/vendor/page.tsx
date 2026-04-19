'use client';

import { FiCalendar, FiDollarSign, FiStar, FiMessageSquare } from 'react-icons/fi';

export default function VendorDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Vendor Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Vendor Name</span>
            <button className="text-red-600 hover:text-red-800">Logout</button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">45</p>
              </div>
              <FiCalendar className="text-4xl text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Revenue</p>
                <p className="text-3xl font-bold text-gray-900">$12K</p>
              </div>
              <FiDollarSign className="text-4xl text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900">4.8</p>
              </div>
              <FiStar className="text-4xl text-yellow-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Messages</p>
                <p className="text-3xl font-bold text-gray-900">23</p>
              </div>
              <FiMessageSquare className="text-4xl text-red-500" />
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Recent Bookings</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4">John & Sarah</td>
                  <td className="py-4">Dec 25, 2026</td>
                  <td className="py-4">$2,500</td>
                  <td className="py-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Confirmed
                    </span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4">Mike & Emma</td>
                  <td className="py-4">Jan 15, 2027</td>
                  <td className="py-4">$3,000</td>
                  <td className="py-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
