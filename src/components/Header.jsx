import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="6283469c86903.png" 
              alt="WOWTOP"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Home
            </a>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                Product Center
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#fa-parts" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    FA industrial automation parts
                  </a>
                  <a href="#fixtures" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    governance vehicle
                  </a>
                  <a href="#automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Automation equipment
                  </a>
                </div>
              </div>
            </div>

            {/* Technical Support Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                Technical support
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Industry solutions
                  </a>
                  <a href="#service" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Service system
                  </a>
                  <a href="#downloads" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Data download
                  </a>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center">
                About Us
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Group Profile
                  </a>
                  <a href="#history" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Development history
                  </a>
                  <a href="#honors" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Group honors
                  </a>
                  <a href="#layout" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                    Industrial layout
                  </a>
                </div>
              </div>
            </div>

            <a href="#news" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              News
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Contact us
            </a>
            <a href="#video" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Image video
            </a>

            {/* Language Toggle */}
            {/*<div className="flex items-center space-x-2 ml-4">
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded transition-colors duration-200">
                CN
              </button>
              <button className="px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                EN
              </button>
            </div>*/}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              <a href="#home" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                Home
              </a>
              <a href="#products" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                Product Center
              </a>
              <a href="#support" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                Technical support
              </a>
              <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                about Us
              </a>
              <a href="#news" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                News
              </a>
              <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                Contact us
              </a>
              <a href="#video" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-200">
                image video
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}