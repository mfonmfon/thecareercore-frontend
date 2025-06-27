import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
// import styles from './TicketHerosection.module.css'

const TicketHerosection = () => {
  return (
    <div className={` bg-gradient-to-br from-blue-900 via-black to-blue-900 relative w-full min-h-[35vh] sm:min-h-[50vh] md:min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:pt-32 xl:pt-40`}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-19">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 md:space-y-4 lg:mt-8 xl:mt-12">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
            Purchase Your Ticket to The Career Core Conference
          </h1>
          ``
        </div> 
      </div>
    </div>  
      )
}

export default TicketHerosection
