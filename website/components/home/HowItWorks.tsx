export default function HowItWorks() {
  const steps = [
    { title: 'Search', description: 'Browse vendors by category or location', icon: '🔍' },
    { title: 'Compare', description: 'View profiles, reviews, and pricing', icon: '⚖️' },
    { title: 'Book', description: 'Contact and book your favorite vendors', icon: '✅' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
