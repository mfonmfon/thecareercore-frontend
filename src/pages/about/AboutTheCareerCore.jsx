import React from 'react'
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader'
import PastEventPictures from '../../assets/images/speakers/IMG_4790.PNG'
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter'
import { FaUsers, FaChalkboardTeacher, FaNetworkWired, FaLightbulb } from 'react-icons/fa';
import FeatureCard from '../../components/featurecard/FeatureCard';


const AboutTheCareerCore = () => {
  return (
    <>
      <TheCareerCoreHeader/>
      <section className="w-full bg-white py-16 px-4 mt-8 md:mt-14">
        <div className="max-w-8xl  px-6 sm:px-12 lg:px-20 py-12 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              ABOUT CAREER CORE
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Experience a transformative career conference designed to equip and empower young professionals to grow, lead, and thrive. Discover clarity, structure, and strategy for your career journey in a vibrant, supportive community.
            </p>
            <div className="flex gap-4 mb-4">
              <button className="px-7 py-2 md:py-5 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Register Now</button>
              <button className="px-7 py-2 md:py-5 bg-gray-100 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-200 transition">Explore Program</button>
            </div>
          </div>
          {/* Right: Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={PastEventPictures}
              alt="The Career Core Event"
              className="w-[400px] md:w-[600px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <FeatureCard  />
      </section>
      <div className='w-full '>
        <div className='max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-12' >      
         
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                The Career Core Founder: Mayowa Adebayo
              </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                    {`This year’s conference will explore the skills and strategies young professionals need to thrive in today’s world of work. From positioning yourself as a leader, to standing out online, to leveraging artificial intelligence, it’s 
                    a blueprint for long-term relevance and impact. 
                    To build a generation of career-intentional leaders who are equipped with the tools, 
                    community, and confidence to thrive globally..`}
                </p>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Learn More
                  </button>
                </div>

              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                <img
                  className="w-[400px] md:w-[600px] h-auto rounded-lg shadow-lg"
                  src={PastEventPictures}
                  alt="Expanding The Reach"
                />
            </div>
      </div>
    </div>
    <TheCareerCoreFooter/>
    </>
  )
}

export default AboutTheCareerCore
