import { useState, useEffect } from 'react'
import "./../../public/assets/header.css?v122";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

{/*}
  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);*/}


   const handleScrollClickHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };
    const handleScrollClickProduct = () => {
    document.getElementById("product")?.scrollIntoView({ behavior: "smooth" });
  };

      const handleScrollClickAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

      const handleScrollClickNews = () => {
    document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
  };
      const handleScrollClickContactus = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

        const handleScrollClickTechnicalSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };


  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  useEffect(() => {
  const handleClickOutside = (event) => {
    const header = document.querySelector("header");
    if (isMenuOpen && header && !header.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, [isMenuOpen]);

  

  return (
    <header className="bg-headerglass shadow-lg-headerglass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="image/6283469c86903.png" 
              alt="WOWTOP"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a style={{ cursor: 'pointer'}} onClick={handleScrollClickHome} className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200">
              Home
            </a>

            {/* Products Dropdown */}
            <div onClick={handleScrollClickProduct} className="relative group">
              <button className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200 flex items-center">
                Product
                 {/*<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>*/}
              </button>
              {/*<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {/*<a href="#fa-parts" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    FA industrial automation parts
                  </a>
                  <a href="#fixtures" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    governance vehicle
                  </a>
                  <a href="#automation" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Automation equipment
                  </a>
                </div>
              </div>*/}
            </div>

            {/* Technical Support Dropdown */}
            <div onClick={handleScrollClickTechnicalSolutions} className="relative group">
              <button className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200 flex items-center">
                Solutions
                {/*<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>*/}
              </button>
              {/*<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  <a href="#solutions" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Industry solutions
                  </a>
                  <a href="#service" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Service system
                  </a>
                  <a href="#downloads" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Data download
                  </a>
                </div>
              </div>*/}
            </div>

            {/* About Us Dropdown */}
            <div onClick={handleScrollClickAbout} className="relative group">
              <button className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200 flex items-center">
                About Us
                {/*<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>*/}
              </button>
               {/*<div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                 <a href="#about" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Group Profile
                  </a>
                  <a href="#history" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Development history
                  </a>
                  <a href="#honors" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Group honors
                  </a>
                  <a href="#layout" className="block px-4 py-2 text-gray-700-headerglass hover:bg-blue-50 hover:text-orange-600-headerglass transition-colors duration-200">
                    Industrial layout
                  </a>
                </div>
              </div>*/}
            </div>

            <a style={{ cursor: 'pointer'}} onClick={handleScrollClickNews}  className=" mousepointer text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200 ">
              News
            </a>
            <a style={{ cursor: 'pointer'}} onClick={handleScrollClickContactus} className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200">
              Contact us
            </a>
            {/*<a href="#video" className="text-gray-700-headerglass hover:text-orange-600-headerglass font-medium transition-colors duration-200">
              Image video
            </a>*/}

            {/* Language Toggle */}
            {/*<div className="flex items-center space-x-2 ml-4">
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded transition-colors duration-200">
                CN
              </button>
              <button className="px-3 py-1 text-sm text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                EN
              </button>
            </div>*/}
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700-headerglass hover:text-orange-600-headerglass hover:bg-gray-100 transition-colors duration-200"
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
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickHome} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                Home
              </a>
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickProduct} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                Product
              </a>
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickTechnicalSolutions} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                Solutions
              </a>
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickAbout} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                About Us
              </a>
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickNews} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                News
              </a>
              <a style={{ cursor: 'pointer'}} onClick={handleScrollClickContactus} className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                Contact us
              </a>
              {/*<a href="#video" className="block px-4 py-2 text-gray-700-headerglass hover:bg-gray-100 rounded transition-colors duration-200">
                image video
              </a>*/}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}