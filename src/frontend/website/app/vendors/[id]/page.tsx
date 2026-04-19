import { Metadata } from 'next';
import VendorDetail from '@/components/vendors/VendorDetail';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In production, fetch vendor data for SEO
  return {
    title: `Vendor Details - Wedding Vendor Marketplace`,
    description: 'View vendor details, reviews, and book services',
  };
}

export default function VendorDetailPage({ params }: Props) {
  return <VendorDetail vendorId={params.id} />;
}
