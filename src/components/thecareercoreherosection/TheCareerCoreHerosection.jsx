import { FaArrowRight } from 'react-icons/fa';
import styles from './TheCareerCoreHerosection.module.css';
import { Link } from 'react-router-dom';
// import BackgroundImage from '../../assets/images/ThirdImage.jpg'

const TheCareerCoreHerosection = () => {
  return (
    <div className={`${styles.hero_bg} relative w-full min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:pt-32 xl:pt-40`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-19">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-12 lg:mt-2 xl:mt-4">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-2xl mb-1  font-bold text-white leading-tight tracking-tight">
            THE CAREER CORE 25
          </h1>
          <h2 className="text-base md:text-5xl w-full sm:text-4xl text-white-500 font-bold text-white ">NAVIGATING THE NEW WORLD OF WORK</h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-100 max-w-2xl mx-auto  leading-relaxed px-2 sm:px-4">
            A conference designed to empower young professionals in Africa. 
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              <Link to={'/becomeasponsor'}>
                Become a Sponsor
              </Link>
              <FaArrowRight className="text-sm" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors duration-300 text-sm sm:text-base">
            <Link to={'/register'}>
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