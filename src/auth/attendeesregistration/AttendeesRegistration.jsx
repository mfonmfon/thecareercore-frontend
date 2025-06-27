import React, { useState } from 'react'
import AttendeesRegistrationBackgroundImage from '../../assets/images/AttendeesBackgroundImage.jpeg'
import { FaArrowRight, FaClosedCaptioning, FaJira, FaLocationArrow, FaMailBulk, FaMap, FaMapPin, FaMapSigns, FaPhone, FaSearchLocation, FaUser } from 'react-icons/fa'
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter'
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader'
import { useNavigate } from 'react-router-dom'

const AttendeesRegistration = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleRegistrationSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted')
  }

  const handleRegistrationInputChange = () => {
    console.log('Test')
  }

  return (
    <>
      <TheCareerCoreHeader />
      <div className="min-h-screen flex">
        {/* Left Side - Image Section */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="absolute inset-0">
            <img
              src={AttendeesRegistrationBackgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <p className="text-gray-600 mt-2">
                You are one step to attending the conference
              </p>
            </div>

            <form onSubmit={handleRegistrationSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      type="text"
                      placeholder="Vanessa"
                      name="firstName"
                      required
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      type="text"
                      placeholder="Benard"
                      name="lastname"
                      required
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLocationArrow className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      type="text"
                      placeholder="Yaba"
                      name="location"
                      required
                    />
                  </div>
                </div>

                {/* Occupation */}
                <div className="space-y-2 ">
                  <label className="block text-sm font-medium text-gray-700">What Do You Do?</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaJira className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      className="w-full pl-10 pr-10 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-white appearance-none"
                      name="occupation"
                      required
                    >
                      <option value="">Select your profession</option>
                      <option value="student">Student</option>
                      <option value="software-engineer">Software Engineer</option>
                      <option value="social-media-manager">Social Media Manager</option>
                      <option value="accountant">Accountant</option>
                      <option value="marketing-strategist">Marketing Strategist</option>
                      <option value="photographer">Photographer</option>
                      <option value="real-estate-consultant">Real Estate Consultant</option>
                      <option value="financial-consultant">Financial Consultant</option>
                      <option value="virtual-assistant">Virtual Assistant</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 011.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMailBulk className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    type="email"
                    placeholder="example@example.com"
                    name="email"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                onClick={()=> navigate('/purchase-ticket')}
                className={`w-full py-3 px-4 rounded-xl text-white font-medium transition duration-200 transform hover:scale-[1.02] ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                }`}
              >
                <div className="flex items-center justify-center">
                  {isLoading ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
                  ) : (
                    <>
                      <span>Proceed</span>
                      <FaArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <TheCareerCoreFooter />
    </>
  )
}

export default AttendeesRegistration
