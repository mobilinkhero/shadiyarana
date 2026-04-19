import StatsCards from '@/components/dashboard/StatsCards';
import RecentBookings from '@/components/dashboard/RecentBookings';
import PerformanceChart from '@/components/dashboard/PerformanceChart';

export default function VendorDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Vendor Dashboard</h1>
      <StatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <PerformanceChart />
        <RecentBookings />
      </div>
    </div>
  );
}
