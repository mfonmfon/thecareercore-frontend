import React from 'react'
import TheCareerCoreFounderImage from '../../assets/images/speakers/PMaySecondPicture.jpg'

const TheCareerCoreFounder = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center  font-sans'>
      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
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

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            className="w-[300px] md:w-[600px] h-auto rounded-lg shadow-lg"
            src={TheCareerCoreFounderImage}
            alt="Expanding The Reach"
          />
        </div>
      </div>
    </div>
  )
}

export default TheCareerCoreFounder