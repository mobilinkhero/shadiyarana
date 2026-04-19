import Link from 'next/link';

const categories = [
  { name: 'Venues', icon: '🏛️', count: 245 },
  { name: 'Photographers', icon: '📸', count: 189 },
  { name: 'Caterers', icon: '🍽️', count: 156 },
  { name: 'Makeup Artists', icon: '💄', count: 203 },
  { name: 'Mehndi Artists', icon: '🎨', count: 178 },
  { name: 'Decorators', icon: '🎊', count: 134 },
  { name: 'Planners', icon: '📋', count: 92 },
  { name: 'Bridal Wear', icon: '👗', count: 167 },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/vendors?category=${category.name}`}
              className="p-6 bg-background rounded-xl hover:shadow-lg transition text-center group"
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm">{category.count}+ vendors</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
