'use client';

export default function VendorDetail({ vendorId }: { vendorId: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <p>Vendor Detail for ID: {vendorId} - Connect to API: GET /api/v1/vendors/{vendorId}</p>
    </div>
  );
}
