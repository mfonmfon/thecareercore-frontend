import React from 'react'
import { FaChalkboardTeacher, FaLightbulb, FaNetworkWired, FaUser, FaUsers } from 'react-icons/fa'

const featuresData = [
  {
   icon: <FaUser className="text-blue-600 text-3xl mb-3" />,
   title: 'Community Networking',
    description: 'Connect with ambitious peers and industry leaders to expand your professional network.' 
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl mb-3" />,
    title: 'Expert Speakers',
    description: 'Learn from industry experts and thought leaders who share their insights and knowledge.' 
  },
  {
    icon: <FaNetworkWired className="text-blue-600 text-3xl mb-3" />,
    title: 'Career Growth Tools',
    description: 'Discover tools and resources to help you advance your career and achieve your goals.'
  },
  {
    icon: <FaLightbulb className="text-blue-600 text-3xl mb-3" />,
    title: 'Inspiring Innovation',
    description: 'Ignite your creativity and discover new ways to stand out in a changing world.'
  }
]
const FeatureCard = () => {
  return (
    <div className="w-full bg-white py-1 px-4 mt-8 md:mt-10">
    <div className='max-w-8xl px-10 sm:px-7 lg:px-20 py-2 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16'>
      {/* Feature Cards */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {featuresData.map((features, index)=>{
            return(
              <div className='bg-gray-50 rounded-xl p-10 flex flex-col items-center text-center shadow-sm' key={index}>
                <span>{features.icon}</span>
                <h3 className='font-bold text-lg mb-1'>{features.title}</h3>
                <p className="text-gray-500 text-sm" >{features.description}</p>
              </div>
            )})}
        </div>
    </div>
    </div>
  )
}

export default FeatureCard
