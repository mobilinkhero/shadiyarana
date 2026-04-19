'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="gradient-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Perfect Wedding Vendors
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Discover and book the best wedding vendors in Pakistan
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-lg">
          <div className="flex flex-col md:flex-row gap-2">
            <input
              type="text"
              placeholder="Search vendors..."
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none"
            />
            <select className="px-6 py-3 rounded-full text-gray-900 focus:outline-none">
              <option>All Cities</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </select>
            <Link
              href="/vendors"
              className="px-8 py-3 gradient-accent text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              Search
            </Link>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-sm">
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-white/80">Vendors</div>
          </div>
          <div>
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-white/80">Happy Couples</div>
          </div>
          <div>
            <div className="text-3xl font-bold">15k+</div>
            <div className="text-white/80">Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
