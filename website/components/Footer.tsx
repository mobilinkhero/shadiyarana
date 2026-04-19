import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Wedding Vendors</h3>
            <p className="text-gray-400">
              Find the perfect wedding vendors in Pakistan
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/vendors" className="hover:text-white">All Vendors</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/vendors?category=Venues" className="hover:text-white">Venues</Link></li>
              <li><Link href="/vendors?category=Photographers" className="hover:text-white">Photographers</Link></li>
              <li><Link href="/vendors?category=Caterers" className="hover:text-white">Caterers</Link></li>
              <li><Link href="/vendors?category=Makeup" className="hover:text-white">Makeup Artists</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@weddingvendors.pk</li>
              <li>Phone: +92 300 1234567</li>
              <li>Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Wedding Vendor Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
