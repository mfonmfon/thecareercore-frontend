import { useState } from 'react';
// import atpng from "../../assets/atpng.png";
import TccLogo from '../../assets/images/TCC logo.png';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const TheCareerCoreHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-15">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={TccLogo} alt="Anonymous Therapy" className="h-8 w-auto" />
              {/* <span className="ml-2 text-xl font-semibold text-gray-800 ">The Career Core</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-5">
            <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              About Us
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/partner" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Partner
            </Link>
            <Link to="/guide" 
            className="inline-flex text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Your Guide
            </Link>
          </div>

          {/* Sign Up Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={()=> navigate("/becomeasponsor")}
              className="ml-8 inline-flex items-center px-4 py-2 border border-black text-sm font-medium rounded-md text-black bg-transparent  hover:bg-blue-700 transition-colors duration-200"
              type="button"
            >
              Become a sponsor
              {/* <FaChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isSignupOpen ? 'rotate-180' : ''}`} /> */}
            </button>

            <button
              // onClick={toggleSignup}
              className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              type="button"
              onClick={()=> navigate('/register')}
            >
              Register Here
              {/* <FaChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isSignupOpen ? 'rotate-180' : ''}`} /> */}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                isMenuOpen ? 'text-blue-600 bg-gray-100' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              } focus:outline-none`}
            >
              <span className="sr-only">Toggle navigation</span>
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 transform transition-transform duration-300 rotate-180" />
              ) : (
                <FaBars className="h-6 w-6 transform transition-transform duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Partners
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Your Guide
            </Link>
            <div className="pt-2 pb-1 border-t border-gray-200">
              <div className="px-3 py-2 text-base font-medium text-gray-600"></div>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Register 
              </Link>
              <Link
                to="/register/therapist"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default TheCareerCoreHeader;