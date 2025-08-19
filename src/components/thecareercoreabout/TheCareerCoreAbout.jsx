import React from 'react'

const TheCareerCoreAbout = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Who Should Attend The Career Core?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            The Career Core is designed for young professionals and early- to mid-career individuals who are
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                Navigating today’s digital job market
              </h3>
              <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
               Navigating the digital job market today requires staying tech-savvy, building a strong online presence, networking virtually, and 
               continuously updating your skills. Tailor your applications and be proactive to find the right opportunities in this fast-paced landscape.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                Upskilling, leadership, branding
              </h3>
              <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
                Focusing on upskilling, leadership, and personal branding is essential for career growth. Developing new skills, strengthening leadership abilities, and building a strong personal brand
                 can open doors to new opportunities and advance your professional journey.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
               Transitioning into new industries or roles
              </h3>
              <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
                If you're exploring a career pivot, The Career Core equips you with practical strategies, 
                transferrable skills enhancement, and industry-specific guidance to confidently enter a new professional domain.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                Build a global professional network
              </h3>
              <p className="text-gray-600 text-base md:text-lg  leading-relaxed">
                
                The Career Core offers opportunities to connect with like-minded professionals, mentors,
                and industry leaders across different sectors, helping you expand your network and gain diverse perspectives for career growth.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 md:p-8">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-4">
                Career clarity and growth
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Seeking clarity in your career path and opportunities for growth is essential for achieving your professional goals. By exploring your strengths, interests, and goals, 
                you can identify the right direction and build a plan to advance your career confidently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheCareerCoreAbout
