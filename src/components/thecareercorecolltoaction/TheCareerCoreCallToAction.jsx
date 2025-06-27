import React from 'react'
import CallToActionBackground from '../../assets/images/speakers/IMG_4790.PNG'

const TheCareerCoreCallToAction = () => {
  return (
    <section className="bg-blue-700 text-white rounded-3xl px-8 py-10 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-[90vw] md:w-[85vw] mx-auto my-24 shadow-2xl">
      {/* Text Section */}
      <div className="flex-1 space-y-1">
        <h4 className="uppercase tracking-widest text-sm font-semibold text-white/70">
          INTERESTED IN THE CAREER CORE ?
        </h4>
        <h2 className="text-5xl font-extrabold my-2 leading-tight">
          Partner With Us
        </h2>
        <p className="text-lg text-white/90 max-w-md">
          Discover how your support can drive professional growth and innovation
        </p>
        <button className="mt-8 px-8 py-4 bg-white text-[#1b2d6b] font-semibold text-lg rounded-full hover:bg-gray-100 transition-all">
          Contact Us
        </button>
      </div>
      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={CallToActionBackground} // Replace with your actual image path
          alt="Devices preview"
          className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover object-center"
        />
      </div>
    </section>
  )
}

export default TheCareerCoreCallToAction
