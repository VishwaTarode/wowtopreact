{/*
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <img 
              src="image/6283469c86903.png" 
              alt="WODTOP"
              className="h-12 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Specializes in the R&D, design, production, sales and service of FA factory automation precision parts, tooling inspection fixtures and automation equipment.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>


          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-400 text-sm">
                  Plot No. 234 of Hitech Defence & Aerospace Park, Phase-2 Industrial Area, Bengaluru, Karnataka, India – 562135
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-400 text-sm">+91-7337872496</p>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-400 text-sm">sales@wowtop.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 Wowtop India., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of use
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </div>
    </footer>
  )
}*/}

{/*
import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Close modal when clicking outside content
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowPrivacy(false);
      setShowTerms(false);
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-4">
              <img
                src="image/6283469c86903.png"
                alt="WODTOP"
                className="h-12 w-auto filter brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Specializes in the R&D, design, production, sales and service of
                FA factory automation precision parts, tooling inspection
                fixtures and automation equipment.
              </p>
            </div>

           
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">
                    Plot No. 234 of Hitech Defence & Aerospace Park, Phase-2
                    Industrial Area, Bengaluru, Karnataka, India – 562135
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">+91-7337872496</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">sales@wowtop.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Wowtop India., Ltd. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of use
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showPrivacy && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative p-6 mx-4">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Privacy Policy
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Wowtop India, we value your privacy. We collect and process
              only the information necessary to improve your experience and our
              services. Your data will never be sold or shared with third
              parties without consent.
            </p>
          </div>
        </div>
      )}

      {showTerms && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative p-6 mx-4">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Terms of Use
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              By accessing and using Wowtop India’s website and services, you
              agree to abide by our policies, terms, and conditions. Unauthorized
              use or reproduction of any material on this site is strictly
              prohibited.
            </p>
          </div>
        </div>
      )}
    </>
  );
}*/}

import { useState } from "react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowPrivacy(false);
      setShowTerms(false);
    }
  };

  return (
    <>
      <footer className="bg-gray-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img
                src="image/6283469c86903.png"
                alt="WODTOP"
                className="h-12 w-auto filter brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Specializes in the R&D, design, production, sales and service of
                FA factory automation precision parts, tooling inspection
                fixtures and automation equipment.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact us</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">
                    Plot No. 234 of Hitech Defence & Aerospace Park, Phase-2
                    Industrial Area, Bengaluru, Karnataka, India – 562135
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">+91-7337872496</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-blue-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-400 text-sm">sales@wowtop.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Wowtop India., Ltd. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setShowTerms(true)}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Terms of use
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PRIVACY POLICY MODAL */}
      {showPrivacy && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative p-6 mx-4">
            <button
              onClick={() => setShowPrivacy(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Privacy Policy
            </h2>

            <div className="max-h-[70vh] overflow-y-auto pr-2 text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                At Wowtop India, we are committed to protecting your personal
                information and your right to privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your data
                when you visit our website or use our services.
              </p>

              <h3 className="font-semibold text-gray-800">
                1. Information We Collect
              </h3>
              <p>
                We collect information that you provide directly to us such as
                your name, email, company name, phone number, and other details
                when you fill out contact forms, subscribe to newsletters, or
                request quotations. We may also collect technical data like IP
                address, browser type, and device identifiers automatically.
              </p>

              <h3 className="font-semibold text-gray-800">
                2. How We Use Your Information
              </h3>
              <p>
                Your data helps us provide, operate, and improve our services.
                We use your information to:
              </p>
              <ul className="list-disc ml-5">
                <li>Respond to inquiries or service requests.</li>
                <li>Send technical updates or marketing communications.</li>
                <li>Enhance site functionality and customer support.</li>
                <li>Comply with applicable laws and regulations.</li>
              </ul>

              <h3 className="font-semibold text-gray-800">
                3. Data Protection and Security
              </h3>
              <p>
                We adopt strict data protection measures to prevent
                unauthorized access, alteration, disclosure, or destruction of
                your personal information. Data is encrypted where applicable
                and stored securely.
              </p>

              <h3 className="font-semibold text-gray-800">4. Your Rights</h3>
              <p>
                You have the right to access, update, or delete your personal
                data. You can also request to withdraw your consent for
                marketing communications anytime.
              </p>

              <h3 className="font-semibold text-gray-800">5. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us at{" "}
                <span className="text-blue-600">sales@wowtop.in</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TERMS OF USE MODAL */}
      {showTerms && (
        <div
          id="modal-overlay"
          onClick={handleOutsideClick}
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        >
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full relative p-6 mx-4">
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Terms of Use
            </h2>

            <div className="max-h-[70vh] overflow-y-auto pr-2 text-gray-600 text-sm leading-relaxed space-y-4">
              <p>
                Welcome to Wowtop India. By accessing or using our website, you
                agree to comply with and be bound by the following terms and
                conditions. Please read them carefully before using our site or
                services.
              </p>

              <h3 className="font-semibold text-gray-800">1. Use of Website</h3>
              <p>
                You agree to use the website only for lawful purposes. You must
                not use our site in any way that could harm, disable, or impair
                its functionality or interfere with others' use.
              </p>

              <h3 className="font-semibold text-gray-800">
                2. Intellectual Property
              </h3>
              <p>
                All content, including text, images, logos, and graphics, are
                the property of Wowtop India unless stated otherwise. Unauthorized
                reproduction or distribution is strictly prohibited.
              </p>

              <h3 className="font-semibold text-gray-800">3. Limitation of Liability</h3>
              <p>
                Wowtop India shall not be liable for any direct or indirect
                damages arising from the use or inability to use our website or
                services, including loss of data or profits.
              </p>

              <h3 className="font-semibold text-gray-800">4. Modifications</h3>
              <p>
                We reserve the right to modify or update these Terms of Use at
                any time without prior notice. Continued use of our site implies
                acceptance of any changes made.
              </p>

              <h3 className="font-semibold text-gray-800">5. Governing Law</h3>
              <p>
                These terms shall be governed by and interpreted in accordance
                with the laws of India. Any disputes shall be resolved in the
                courts of Bengaluru, Karnataka.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

