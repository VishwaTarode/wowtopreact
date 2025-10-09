export default function Stats() {
  const stats = [
    {
      number: "10+",
      label: "years of industry experience",
      description: "Deeply cultivated in the field of FA industrial automation"
    },
    {
      number: "1000+",
      label: "Cooperating customers",
      description: "High-quality customer base around the world"
    },
    {
      number: "50+",
      label: "Professional team",
      description: "Senior engineers and technical experts"
    },
    {
      number: "99%",
      label: "customer satisfaction",
      description: "High-quality services are recognized by customers"
    }
  ]

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Witness of strength
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Let data speak and use strength to prove our professional status in the field of industrial automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300 animate-count-up"
              style={{ animationDelay: `\${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-blue-200 mb-2">
                {stat.label}
              </div>
              <div className="text-blue-300 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}