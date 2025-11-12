import { useState, useEffect } from 'react'
import "./../../public/assets/founder.css?v1";
export default function About() {
        const handleScrollClickContactusA = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

        const handleScrollClickNewsA = () => {
    document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="fsection">
          <div class="fimage">
            <img src="image/founder/founder.jpeg" alt="Automated Assembly & Production Line"/>
          </div>
          <div class="fcontent">
            {/*<div class="pnumber">1</div>
            <h2>Automated Assembly & Production Line</h2>*/}
            {/*<p>Ganeshi Pradhan, founder of WOWTOP Technology, previously worked with several Chinese enterprises in India and had multiple business visits to China. During this period, he established strong connections with partners specializing in CNC precision component manufacturing.</p>
            <p>In 2023, after engaging with several experienced CNC partners, he recognized the tremendous potential and growing demand for CNC machinery and precision components within India’s rapidly developing manufacturing sector.</p>
            <p>Motivated by this vision, he returned to India and, together with Poina Sarah, co-founded WOWTOP Technology Private Limited, aiming to integrate China’s advanced precision-manufacturing expertise with India’s emerging industrial market.</p>
            <p>With the mission to empower India’s industrial development and the vision to become the country’s No. 1 CNC leader, WOWTOP is committed to driving innovation, precision, and progress across India’s manufacturing landscape.</p>*/}
            <p>Ganeshi Pradhan, founder of WOWTOP Technology, previously collaborated with several Chinese enterprises in India and made multiple business trips to China. During this time, he built strong connections with partners specializing in CNC precision component manufacturing.In 2023, after working closely with experienced CNC partners, he identified the significant growth potential and rising demand for CNC machinery and precision components in India’s rapidly expanding manufacturing sector.Motivated by this vision, he returned to India and, together with Poina Sarah, co-founded WOWTOP Technology Private Limited, aiming to integrate China’s advanced precision manufacturing expertise with India’s emerging industrial market.With a mission to empower India’s industrial development and a vision to become the nation’s leading CNC enterprise, WOWTOP is dedicated to driving innovation, precision, and progress across India’s manufacturing landscape.</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WOWTOP TECHNOLOGY PRIVATE LIMITED, established in July 2015, is a high-tech enterprise specializing in Factory Automation (FA) precision components and automation equipment. The company core business covers:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Company Introduction */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The1 company’s core business covers
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                <b>R&D and manufacturing of precision automation components,</b> including pneumatic parts, rolling functional components, high-precision adjustment platforms, 4-axis robots, aluminum profiles, industrial robots, control modules, transmitters, and sensors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <b>Design and production of tooling and inspection fixtures</b>
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <b>Development, system integration, sales, and services</b> for<b> automation equipment and production lines.</b>Through continuous <b>technological innovation</b> and <b>product development</b>, WOWTOP provides high-performance FA precision standard solutions that help customers enhance productivity and enable a more automated and efficient manufacturing environment.Currently, the company focuses on two key application areas in its tooling, inspection fixtures, and automation systems business.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                <b>Consumer electronics </b>– including smartphones and wearable devices
              </p>
              <p className="text-gray-600 leading-relaxed">
                <b>Automotive electronics</b> Looking ahead, WOWTOP plans to expand its solution offerings into a broader range of FA automation applications. With a strategic focus on <b>precision FA standard components</b> and <b>intelligent equipment</b>, the company aims to <b>scale rapidly</b>, become a <b>leading brand in the industry</b>, support <b>India’s industrial transformation</b>, and contribute to building a <b>global manufacturing hub</b>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button onClick={handleScrollClickNewsA} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                learn more
              </button>
              <button onClick={handleScrollClickContactusA} className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact us
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
                <h4 className="text-xl font-bold text-gray-900 mb-2">Technological innovation</h4>
                <p className="text-gray-600">
                  Continue to invest in research and development, promote technological innovation in industrial automation, and provide customers with more advanced solutions
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
                <h4 className="text-xl font-bold text-gray-900 mb-2">Professional team</h4>
                <p className="text-gray-600">
                  Have an experienced team of engineers to provide full-process professional services from design to production
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
                <h4 className="text-xl font-bold text-gray-900 mb-2">quality assurance</h4>
                <p className="text-gray-600">
                  Strict quality control system ensures that every product meets the highest standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}