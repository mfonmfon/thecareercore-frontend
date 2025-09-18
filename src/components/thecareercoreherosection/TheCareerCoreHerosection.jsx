import { FaArrowRight } from 'react-icons/fa';
import styles from './TheCareerCoreHerosection.module.css';
import { Link } from 'react-router-dom';

const TheCareerCoreHerosection = () => {
  return (
    <div
      className={`${styles.hero_bg} relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:pt-32 xl:pt-40`}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            THE CAREER CORE 25
          </h1>

          {/* Secondary Heading */}
          <h2 className="text-base sm:text-xl md:text-3xl lg:text-4xl font-semibold text-white">
            NAVIGATING THE NEW WORLD OF WORK
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed px-2">
            A conference designed to empower young professionals in Africa.
          </p>

          {/* Event Details */}
          <div className="mt-2 sm:mt-4 text-gray-200">
            <p className="text-xs sm:text-sm md:text-base">
              <span className="font-medium">157 Gardens, 157 Ikorodu Road, Onipanu</span>
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              Saturday, 20th September 2025 &nbsp; | &nbsp; 9:00 AM - 4:00 PM
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link
                onClick={() => {
                  window.location.href = 'mailto:Thecareercoreconference@gmail.com';
                }}
              >
                Become a Sponsor
              </Link>
              <FaArrowRight className="text-xs sm:text-sm" />
            </button>

            <button className="w-full sm:w-auto bg-white/10 hover:bg-blue-600 text-white px-5 sm:px-7 py-2 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base">
              <Link
                onClick={() => {
                  window.location.href =
                    'https://invitte.app/event/special-event/2RF4BY';
                }}
              >
                Register Here
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheCareerCoreHerosection;
