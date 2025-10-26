export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "The company obtained ISO9001 quality management system certification",
      excerpt: "Shenzhen Tianyi Intelligent Technology Co., Ltd. officially passed ISO9001:The 2015 quality management system certification marks that the company has reached the international advanced level in quality management.",
      date: "2024-01-15",
      category: "Company news",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "New generation of intelligent detection equipment officially released",
      excerpt: "Our latest developed intelligent detection equipment uses AI visual recognition technology to improve detection accuracy by 30%%, providing customers with more efficient quality control solutions.",
      date: "2024-01-10",
      category: "Product information",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Attend the 2024 Industrial Automation Exhibition",
      excerpt: "The company will bring its latest products to the Shenzhen International Industrial Automation and Robotics Exhibition to showcase our latest technological achievements in the field of FA industrial automation.",
      date: "2024-01-05",
      category: "Industry trends",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            News
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the latest developments of the company and master the cutting-edge information of the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/*} {newsItems.map((item, index) => (
            <article 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `\${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2">
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
                  Read more →
                </button>
              </div>
            </article>
          ))}
          */}

        </div>

          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <a style={{ color: '#000000',    fontSize: '3rem', backgroundColor: '#f9bc00db',fontWeight: '700', padding: '10px' }}>Coming Soon</a>
          </div>

        {/*<div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            View more news
          </button>
        </div>*/}
      </div>
    </section>
  )
}