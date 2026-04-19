'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiDollarSign, FiPieChart } from 'react-icons/fi';

export default function BudgetPage() {
  const [budget, setBudget] = useState([
    { id: 1, category: 'Venue', budgeted: 500000, spent: 500000 },
    { id: 2, category: 'Catering', budgeted: 300000, spent: 200000 },
    { id: 3, category: 'Photography', budgeted: 150000, spent: 150000 },
    { id: 4, category: 'Decoration', budgeted: 200000, spent: 0 },
    { id: 5, category: 'Makeup', budgeted: 80000, spent: 0 },
    { id: 6, category: 'DJ/Music', budgeted: 100000, spent: 0 },
    { id: 7, category: 'Invitations', budgeted: 50000, spent: 0 },
    { id: 8, category: 'Miscellaneous', budgeted: 120000, spent: 0 },
  ]);

  const totalBudget = budget.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = budget.reduce((sum, item) => sum + item.spent, 0);
  const remaining = totalBudget - totalSpent;
  const percentSpent = (totalSpent / totalBudget) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-red-800">Shadiyarana</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-gray-700 hover:text-red-800">Home</Link>
            <Link href="/vendors" className="text-gray-700 hover:text-red-800">Vendors</Link>
            <Link href="/checklist" className="text-gray-700 hover:text-red-800">Checklist</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Budget Planner</h1>
        <p className="text-gray-600 mb-8">Track your wedding expenses and stay within budget</p>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiDollarSign className="text-blue-600 text-xl" />
              </div>
              <p className="text-sm text-gray-600">Total Budget</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">PKR {totalBudget.toLocaleString()}</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <FiDollarSign className="text-red-600 text-xl" />
              </div>
              <p className="text-sm text-gray-600">Total Spent</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">PKR {totalSpent.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mt-1">{percentSpent.toFixed(1)}% of budget</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <FiDollarSign className="text-green-600 text-xl" />
              </div>
              <p className="text-sm text-gray-600">Remaining</p>
            </div>
            <p className="text-3xl font-bold text-gray-900">PKR {remaining.toLocaleString()}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold text-gray-900">Budget Progress</p>
            <p className="text-sm text-gray-600">{percentSpent.toFixed(1)}%</p>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className={`h-4 rounded-full transition-all duration-500 ${
                percentSpent > 90 ? 'bg-red-500' : percentSpent > 70 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(percentSpent, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Budget Breakdown */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Budget Breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Category</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Budgeted</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Spent</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600">Remaining</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {budget.map((item, index) => {
                  const remaining = item.budgeted - item.spent;
                  const percentUsed = (item.spent / item.budgeted) * 100;
                  
                  return (
                    <tr key={item.id} className={index !== budget.length - 1 ? 'border-b border-gray-100' : ''}>
                      <td className="px-6 py-4 font-medium text-gray-900">{item.category}</td>
                      <td className="px-6 py-4 text-right text-gray-600">PKR {item.budgeted.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right font-semibold text-gray-900">PKR {item.spent.toLocaleString()}</td>
                      <td className="px-6 py-4 text-right text-gray-600">PKR {remaining.toLocaleString()}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          percentUsed === 100 ? 'bg-green-100 text-green-800' :
                          percentUsed > 0 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-600'
                        }`}>
                          {percentUsed === 100 ? 'Paid' : percentUsed > 0 ? 'Partial' : 'Pending'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
