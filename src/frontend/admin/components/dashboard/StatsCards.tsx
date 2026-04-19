export default function StatsCards() {
  const stats = [
    { title: 'Total Vendors', value: '500+', change: '+12%', icon: '🏪' },
    { title: 'Total Users', value: '10,000+', change: '+8%', icon: '👥' },
    { title: 'Total Bookings', value: '2,500+', change: '+15%', icon: '📅' },
    { title: 'Revenue', value: 'Rs. 5M', change: '+20%', icon: '💰' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-green-600 text-sm mt-1">{stat.change}</p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
