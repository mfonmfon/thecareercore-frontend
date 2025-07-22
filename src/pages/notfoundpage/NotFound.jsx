import React from 'react';
import NotFoundImage from '../../assets/images/notfoundimage-2.jpeg'; // Replace with actual path

const NotFound = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center relative">
        {/* Background 404 text */}
        <h1 className="text-[10rem] sm:text-[14rem] font-extrabold text-gray-200 z-0 select-none">
          404
        </h1>

        {/* Foreground image */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none mt-72 sm:mt-50">
          <img
            src={NotFoundImage}
            alt="Skater walking"
            className="w-64 sm:w-80 object-contain"
          />
        </div>

        {/* Message */}
        <div className="relative z-10 mt-52 sm:mt-80">
          <p className="text-gray-500 text-lg uppercase tracking-widest">
            Seems like you are lost
          </p>

          <a
            href="/"
            className="mt-6 inline-block text-sm text-blue-600 hover:text-blue-800 transition"
          >
            ← Back to the homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
