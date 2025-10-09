export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "公司获得ISO9001质量管理体系认证",
      excerpt: "深圳市天一智能科技有限公司正式通过ISO9001:2015质量管理体系认证，标志着公司在质量管理方面达到国际先进水平。",
      date: "2024-01-15",
      category: "公司新闻",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "新一代智能检测设备正式发布",
      excerpt: "我们最新研发的智能检测设备采用AI视觉识别技术，检测精度提升30%，为客户提供更高效的质量控制解决方案。",
      date: "2024-01-10",
      category: "产品资讯",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "参加2024年工业自动化展览会",
      excerpt: "公司将携最新产品参加深圳国际工业自动化及机器人展览会，展示我们在FA工业自动化领域的最新技术成果。",
      date: "2024-01-05",
      category: "行业动态",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            新闻资讯
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            了解公司最新动态，掌握行业前沿资讯
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
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
                  阅读更多 →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            查看更多新闻
          </button>
        </div>
      </div>
    </section>
  )
}