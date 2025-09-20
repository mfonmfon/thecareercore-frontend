import React from 'react'
import UnknownSpeakerImage from '../../assets/images/UnknownFaceImage.jpg'
import AdewumiAphonosoImage from '../../assets/images/panel-speakers/Adewumi Alphonso.jpeg'
import OmolaraDada from '../../assets/images/panel-speakers/OMOLARA DADA.jpg'
import EmmanuelFaithImage from '../../assets/images/speakers/Emmanuel Faith.jpg'
import KemaOyihImage from '../../assets/images/speakers/Kema Oyih.JPG'
import OyindaAkinyemiImage from '../../assets/images/speakers/Oyinda Akinyemi.jpg'
import TemitopeOladokunImage from '../../assets/images/speakers/Temitope Oladokun Headshot.jpeg'
import DrJoshauAdemuwagun from '../../assets/venueimage/Dr. Joshua A. Ademuwagun (SRF-ICRED).jpg'

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
    name: 'Emmanuel Faith',
    jobTitle: 'HR professional, consultant, and capacity builder',
    speakersImage: EmmanuelFaithImage,
  },
  {
    name: 'Kema Oyih',
    jobTitle: 'Artist manager and operations specialist',
    speakersImage: KemaOyihImage,
  },
  {
    name: 'Oyinda Akinyemi',
    jobTitle: 'Heads up Equity Capital Markets for Africa Regions in the Standard Bank Group',
    speakersImage: OyindaAkinyemiImage,
  },
  {
    name: 'Temitope Oladokun',
    jobTitle: 'Director of Customer Management at Coca-Cola',
    speakersImage: TemitopeOladokunImage,
  },
  {
    name: 'Dr Joshua ',
    jobTitle: 'Human Resources Director at Pernod Ricard Nigeria',
    speakersImage: DrJoshauAdemuwagun,
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
            className='rounded-full duration-300 '
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