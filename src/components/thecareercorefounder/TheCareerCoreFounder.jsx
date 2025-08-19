import React from 'react'
import TheCareerCoreFounderImage from '../../assets/images/speakers/PMaySecondPicture.jpg'

const TheCareerCoreFounder = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center  font-sans'>
      <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            The Host: Mayowa Agbelese
            </h2>
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed mb-6">
            This year’s conference will explore the key strategies young professionals need to thrive. From leadership to AI, we’re equipping a new generation to succeed globally.
            </p>
            {/* <a
              href="/founder" // <-- Update this if you're using React Router
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a> */}
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