import React, { useState } from 'react';
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader';
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter';
import SponsorBackgroundImage from '../../assets/images/SponsorBackgroundImage.jpeg';
import { FaArrowRight, FaMailBulk, FaPen, FaPhone, FaUser } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BecomeASponsor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [sponsorFormData, setSponsorFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    companyName: '',
    phoneNumber: '',
    companyDescription: '',
    whereYouHeardCareerCore: '',
  });

  const handleSponsorInputChange = (event)=>{
    setSponsorFormData({...sponsorFormData, [event.target.name]: event.target.value})
  }
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\+234|0)[789][01]\d{8}$/;
    return phoneRegex.test(phoneNumber);
  }
  const handleSponsorSubmit = async (event)=>{
    event.preventDefault();
    setIsLoading(true);
    if(!isValidPhoneNumber(sponsorFormData.phoneNumber)){
      toast.error('Invalid phone number');
      setIsLoading(false);
      return;
    }
    try{
      console.log('Submitting payload:', sponsorFormData);
      const response = await axios.post('http://localhost:8080/api/v1/sponsors/become-sponsor', sponsorFormData); 
      if(response.status === 201){
        toast.success('Registration successful! Redirecting...');
        setTimeout(()=>{
          navigate('/')
        })
      }
    }
    catch(error){
      console.log('Error:', error);
      toast.error(error.response?.data?.message || 'Server error. Please check your connection.');
      // setFormErrors(error.response?.data || {}); 
    }finally{
      setIsLoading(false);
    }
  }
  return (
    <>
      <TheCareerCoreHeader />
      <ToastContainer position="top-right" />
      <div className="w-full min-h-screen">
        
        {/* Sponsors form */}
        <div className="min-h-screen flex">
          {/* Left Side - Image Section */}
          <div className="hidden lg:block w-1/2 relative">
            <img
              src={SponsorBackgroundImage}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <p className="text-gray-600 mt-2">Partner with us today</p>
              </div>

              {formErrors.general && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600">
                  {formErrors.general}
                </div>
              )}

              <form onSubmit={handleSponsorSubmit}  className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  
                  <div className="space-y-2">
                    <label className="block text-sm  font-medium text-gray-500">Business Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaMailBulk className="h-4 w-5 text-gray-400" />
                      </div>
                      <input
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          formErrors.businessEmail ? 'border-red-500' : ''
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                        type="companyEmail"
                        placeholder="co@gmail.com"
                        name="companyEmail"
                        value={sponsorFormData.businessEmail}
                        onChange={handleSponsorInputChange}
                        required
                      />
                      {formErrors.businessEmail && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.businessEmail}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">First Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUser className="h-3 w-5 text-gray-400" />
                        </div>
                        <input
                          className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                            formErrors.firstName ? 'border-red-500' : ''
                          } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                          type="text"
                          placeholder="Vanessa"
                          name="firstName"
                          value={sponsorFormData.firstName}
                          onChange={handleSponsorInputChange}
                          required
                        />
                      {formErrors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>
                      )}
                    </div>
                  </div>


                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-3 w-5 text-gray-400" />
                      </div>
                      <input
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          formErrors.lastName ? 'border-red-500' : ''
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                        type="text"
                        placeholder="Benard"
                        name="lastName"
                        value={sponsorFormData.lastName}
                        onChange={handleSponsorInputChange}
                        required
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-500">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-3 w-5 text-gray-400" />
                      </div>
                      <input
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                          formErrors.companyName ? 'border-red-500' : ''
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                        type="text"
                        placeholder="Cowrywise"
                        name="companyName"
                        value={sponsorFormData.companyName}
                        onChange={handleSponsorInputChange}
                        required
                      />
                      {formErrors.companyName && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.companyName}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">Company Description</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPen className="h-3 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        formErrors.companyDescription ? 'border-red-500' : ''
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      type="text"
                      placeholder="Helium Health is a..."
                      name="companyDescription"
                      value={sponsorFormData.companyDescription}
                      onChange={handleSponsorInputChange}
                      required
                    />
                    {formErrors.companyDescription && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.companyDescription}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-500">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="h-3 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        formErrors.phoneNumber ? 'border-red-500' : ''
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      type="tel"
                      placeholder="090"
                      name="phoneNumber"
                      value={sponsorFormData.phoneNumber}
                      onChange={handleSponsorInputChange}
                      required
                    />
                    {formErrors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm md:text-sm font-medium text-gray-500">
                    How did you hear about The Career Core?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPen className="h-3 w-5 text-gray-400" />
                    </div>
                    <input
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                        formErrors.howDidYouHear ? 'border-red-500' : ''
                      } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                      type="text"
                      placeholder="Tell us"
                      name="whereYouHeardCareerCore"
                      value={sponsorFormData.howDidYouHear}
                      onChange={handleSponsorInputChange}
                      required
                    />
                    {formErrors.howDidYouHear && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.howDidYouHear}</p>
                    )}
                  </div>
                </div>

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
      </div>
      <TheCareerCoreFooter />
    </>
  );
};

export default BecomeASponsor;