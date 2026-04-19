'use client';

import Link from 'next/link';
import { FiSearch, FiHeart, FiCalendar, FiStar } from 'react-icons/fi';

export default function HomePage() {
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
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Wedding Vendors
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Connect with the best photographers, venues, caterers, and more for your dream wedding
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-full shadow-lg p-2 flex">
          <input
            type="text"
            placeholder="Search for vendors, venues, photographers..."
            className="flex-1 px-6 py-3 outline-none"
          />
          <button className="bg-red-800 text-white px-8 py-3 rounded-full hover:bg-red-900 flex items-center gap-2">
            <FiSearch /> Search
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiSearch className="text-3xl text-red-800" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
          <p className="text-gray-600">Find vendors by category, location, and budget</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiStar className="text-3xl text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Verified Reviews</h3>
          <p className="text-gray-600">Read authentic reviews from real couples</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiCalendar className="text-3xl text-red-800" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
          <p className="text-gray-600">Book and manage all your vendors in one place</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FiHeart className="text-3xl text-amber-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Save Favorites</h3>
          <p className="text-gray-600">Create your shortlist and compare vendors</p>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['Photographers', 'Venues', 'Caterers', 'Decorators', 'Makeup Artists', 'DJs'].map((cat) => (
            <Link
              key={cat}
              href={`/categories/${cat.toLowerCase()}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-semibold">{cat}</h3>
            </Link>
          ))}
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
