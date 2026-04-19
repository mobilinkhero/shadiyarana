'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Vendors', path: '/vendors', icon: '🏪' },
  { name: 'Users', path: '/users', icon: '👥' },
  { name: 'Bookings', path: '/bookings', icon: '📅' },
  { name: 'Reviews', path: '/reviews', icon: '⭐' },
  { name: 'Categories', path: '/categories', icon: '📂' },
  { name: 'Analytics', path: '/analytics', icon: '📈' },
  { name: 'Settings', path: '/settings', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
              pathname === item.path ? 'bg-primary/10 border-r-4 border-primary' : ''
            }`}
          >
            <span className="mr-3 text-xl">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
