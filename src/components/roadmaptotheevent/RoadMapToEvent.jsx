import React from 'react'
import TheCareerCoreHeader from '../thecareercoreheader/TheCareerCoreHeader';
import VenueLocationImage from "../../assets/venueimage/LocationMapper.png"
const RoadMapToEvent = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
    <TheCareerCoreHeader />
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center px-6 md:px-20">
        <div className="flex justify-center gap-4 my-6">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
            {/* 💳 */}
          </div>
          {/* <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
            🏦
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
            📊
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shadow">
            💼
          </div> */}
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
          FIND YOUR WAY TO THE <br />
          CAREER CORE 25 
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl">
          Join us at 157 Gardens, 157 Ikorodu Road, Onipanu, Lagos, Nigerian.<br />
          Easily locate the venue with our step-by-step directions.
        </p>

        <button className="mt-6 rounded-full bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
          Get Directions
        </button>

        {/* Characters Illustration */}
        <div className="w-full flex justify-center mt-10">
          <img 
            src={VenueLocationImage}
            alt="Happy customers" 
            className="w-full max-w-5xl"
          />
        </div>
      </section>
    </div>
  );
}

export default RoadMapToEvent
