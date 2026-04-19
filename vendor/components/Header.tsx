export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Welcome back, Vendor Name</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">🔔</button>
          <button className="p-2 hover:bg-gray-100 rounded-full">👤</button>
        </div>
      </div>
    </header>
  );
}
