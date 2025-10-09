export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            关于我们
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深圳市天一智能科技有限公司成立于2013年，专注于FA工业自动化领域的创新与发展
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company Introduction */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                企业简介
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                深圳市天一智能科技有限公司(WODTOP)成立于2013年12月，主要从事FA（Factory Automation）工厂自动化精密零件，工装和检测用治具及自动化设备的研发、设计、生产、销售和服务。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                公司业务涵盖气动元件、滚动功能部件、高精度调整频台单元、轴机器人、铝型材、工业机器人、工控模块、变送器及传感器等FA工厂自动化精密零件。
              </p>
              <p className="text-gray-600 leading-relaxed">
                基于应用场景，公司工装和检测用治具及自动化设备业务当前聚焦于智能手机、智能穿戴设备等消费电子以及汽车电子两大应用领域。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                了解更多
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                联系我们
              </button>
            </div>
          </div>

          {/* Company Image/Features */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">技术创新</h4>
                <p className="text-gray-600">
                  持续投入研发，推动工业自动化技术创新，为客户提供更先进的解决方案
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">专业团队</h4>
                <p className="text-gray-600">
                  拥有经验丰富的工程师团队，提供从设计到生产的全流程专业服务
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">质量保证</h4>
                <p className="text-gray-600">
                  严格的质量控制体系，确保每一件产品都符合最高标准
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}