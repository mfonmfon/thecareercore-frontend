import React, { useState } from 'react';
import AttendeesRegistrationBackgroundImage from '../../assets/images/AttendeesBackgroundImage.jpeg';
import {
  FaArrowRight,
  FaJira,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaUser,
} from 'react-icons/fa';
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter';
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AttendeesRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phoneNumber: '',
    occupation: '',
  });

  const handleRegistrationInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const isValidPhoneNumber = (phone) => {
    return /^(\+234|0)[789][01]\d{8}$/.test(phone);
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Validate phone number before sending
    if (!isValidPhoneNumber(formData.phoneNumber)) {
      toast.error('Invalid Nigerian phone number format');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Submitting payload:', formData);
      const response = await axios.post(
        'http://localhost:8080/api/v1/attendees/register',
        formData
      );
      console.log("RESPONSE ->{}", response);
      if (response.status === 201) {
        toast.success('Registration successful! Redirecting...');
        setTimeout(() => {
          // navigate('/success');
          window.location.href = 'https://selar.com/575777n591';
        }, 2000);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || 'Server error. Please check your connection.'
      );
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TheCareerCoreHeader />
      <ToastContainer position="top-right" />
      <div className="min-h-screen flex">
        {/* Left Image */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src={AttendeesRegistrationBackgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
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
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleRegistrationInputChange}
                      placeholder="Vanessa"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleRegistrationInputChange}
                      placeholder="Benard"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <div className="relative">
                    <FaLocationArrow className="absolute top-3 left-3 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleRegistrationInputChange}
                      placeholder="Yaba"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">What Do You Do?</label>
                  <div className="relative">
                    <FaJira className="absolute top-3 left-3 text-gray-400" />
                    <select
                      name="occupation"
                      required
                      value={formData.occupation}
                      onChange={handleRegistrationInputChange}
                      className="w-full pl-10 pr-10 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 bg-white"
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
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="relative">
                  <FaMailBulk className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleRegistrationInputChange}
                    placeholder="example@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="relative">
                  <FaPhone className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleRegistrationInputChange}
                    placeholder="e.g. +2348147995494 or 08147995494"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-xl text-white font-medium transition duration-200 transform hover:scale-[1.02] ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                }`}
              >
                <div className="flex items-center justify-center">
                  {isLoading ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5" />
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
  );
};

export default AttendeesRegistration;
