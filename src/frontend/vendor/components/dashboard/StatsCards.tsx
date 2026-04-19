export default function StatsCards() {
  const stats = [
    { title: 'Total Bookings', value: '45', change: '+5 this week', icon: '📅' },
    { title: 'Pending Requests', value: '8', change: 'Needs attention', icon: '⏳' },
    { title: 'Total Revenue', value: 'Rs. 450K', change: '+12% this month', icon: '💰' },
    { title: 'Average Rating', value: '4.8', change: '120 reviews', icon: '⭐' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.change}</p>
            </div>
            <div className="text-4xl">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
