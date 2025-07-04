export default function Stats() {
  const stats = [
    { value: '4.8', label: 'Customer Rating' },
    { value: '300%', label: 'Avg. Response Increase' },
    { value: '65%', label: 'Cost Reduction' },
    { value: '5M+', label: 'Messages Sent Daily' },
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-slate-200">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
