import React from 'react'
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader'
import PastEventPictures from '../../assets/images/speakers/IMG_4790.PNG'
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter'

const AboutTheCareerCore = () => {
  return (
    <>
    <TheCareerCoreHeader/>
    <div className='w-full '>
      <div className=' bg-gradient-to-br from-blue-900 via-black to-blue-900 py-40  '>
        <h1 className='text-white  ml-25 text-6xl font-bold '>ABOUT THE CAREER CORE</h1>
        <p className='text-white ml-25 mt-7'>is an annual career conference designed to equip and empower young professionals to grow, lead, <br/>and thrive in today’s ever-evolving work environment.
Launched in 2024 under the name "Idea to Impact",<br/> the conference debuted as a solution-driven gathering for young people seeking clarity, structure, and strategy<br/> for their career journeys. With strong feedback and a growing community, the event has now evolved into The Career Core,<br/> a central space where professionals discover the tools, mindsets, and networks needed to accelerate their career growth.
TCC is more than a conference. It’s a movement.</p>
      </div>
      
      <div className='max-w-8xl mx-auto px-6 sm:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-center justify-between gap-12' >      

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
