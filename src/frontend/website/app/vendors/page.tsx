import { Metadata } from 'next';
import VendorList from '@/components/vendors/VendorList';
import VendorFilters from '@/components/vendors/VendorFilters';

export const metadata: Metadata = {
  title: 'All Vendors - Wedding Vendor Marketplace',
  description: 'Browse all wedding vendors in Pakistan. Filter by category, city, and price.',
};

export default function VendorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Wedding Vendors</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <VendorFilters />
        </aside>
        <main className="lg:col-span-3">
          <VendorList />
        </main>
      </div>
    </div>
  );
}
