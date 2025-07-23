import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TheCareerCoreFooter = () => {
  const footerLinks = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/podcast', title: 'Podcast' },
    { path: '/blog', title: 'Blog' },
    { path: '/resources', title: 'Resources' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-15">
     <div className='flex justify-center items-center mb-19'>
      <h1 className='text-5xl sm:text-8xl'> THE CAREER CORE 2025</h1>
     </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">The Career Core 2025</h2>
          <p className="text-sm leading-relaxed">
            this event offers you the opportunity to connect with industry pioneers, gain valuable insights, and unlock your full potential in the digital age.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 flex gap-4">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="hover:text-blue-500 transition duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition duration-300"
            >
              <FaTwitter className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition duration-300"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} The Career Core. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default TheCareerCoreFooter
