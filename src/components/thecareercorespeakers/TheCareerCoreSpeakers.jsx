import React from 'react'
import UnknownSpeakerImage from '../../assets/images/UnknownFaceImage.jpg'
import AdewumiAphonosoImage from '../../assets/images/panel-speakers/Adewumi Alphonso.jpeg'
import OmolaraDada from '../../assets/images/panel-speakers/OMOLARA DADA.jpg'

const speakersData = [
  {
    name: 'ADEWUMI ALPHONSO',
    jobTitle: 'HR Leader, Business Executive, and Certified Professional Coach',
    speakersImage: AdewumiAphonosoImage,
  },
  {
    name: 'Omolara Dada',
    jobTitle: 'Lead Growth and Marketing, Anchor ',
    speakersImage: OmolaraDada,
  },
  {
    name: 'Coming soon',
    // jobTitle: 'CTO, Future Tech',
    speakersImage: UnknownSpeakerImage,
  },
  {
    name: 'Coming sooon',
    // jobTitle: 'Head of Marketing, Global Brands',
    speakersImage: UnknownSpeakerImage,
  },
  {
    name: 'Coming soon',
    // jobTitle: 'Head of Marketing, Global Brands',
    speakersImage: UnknownSpeakerImage,
  },
  {
    name: 'Coming soon',
    // jobTitle: 'Head of Marketing, Global Brands',
    speakersImage: UnknownSpeakerImage,
  },
  {
    name: 'Coming soon',
    // jobTitle: 'Head of Marketing, Global Brands',
    speakersImage: UnknownSpeakerImage,
  },
]

const TheCareerCoreSpeakers = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 px-4 md:px-8 lg:px-16 py-16 overflow-hidden'>
      {/* Header Section */}
      <div className='text-center mb-12'>
        <h1 className='md:text-5xl text-2xl font-bold text-white drop-shadow-lg'>
          MEET OUR INFLUENTIAL SPEAKERS FOR 2025!
        </h1>
        <p className='mt-4 text-base md:text-xl text-gray-200 max-w-1xl mx-auto'>
          Discover insights from industry leaders to transform your career journey.
        </p>
      </div>
      
      {/* Speakers Grid */}
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 '>
        {speakersData.map((speaker, index) => (
          <div
            key={index}
            className='rounded-xl duration-300 '
          >
            {/* Image Container */}
            <div className='p-4 flex justify-center'>
              <img
                src={speaker.speakersImage}
                alt={speaker.name}
                className='w-80 h-65 object-cover'
              />
              
            </div>
            {/* Speaker Info */}
            <div className='p-6 text-left'>
              <h2 className='text-lg md:text-xl font-semibold text-gray-300'>{speaker.name}</h2>
              <p className='mt-2 text-base md:text-xl text-gray-400 font-medium'>{speaker.jobTitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TheCareerCoreSpeakers