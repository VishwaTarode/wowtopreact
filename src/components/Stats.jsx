export default function Stats() {
  const stats = [
    {
      number: "10+",
      label: "年行业经验",
      description: "深耕FA工业自动化领域"
    },
    {
      number: "1000+",
      label: "合作客户",
      description: "遍布全球的优质客户群体"
    },
    {
      number: "50+",
      label: "专业团队",
      description: "资深工程师和技术专家"
    },
    {
      number: "99%",
      label: "客户满意度",
      description: "优质服务获得客户认可"
    }
  ]

  return (
    <section className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            实力见证
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            用数据说话，用实力证明我们在工业自动化领域的专业地位
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