import React, { useState } from 'react';
import TheCareerCoreHeader from '../../components/thecareercoreheader/TheCareerCoreHeader';
import TheCareerCoreFooter from '../../components/thecareercorefooter/TheCareerCoreFooter';
import SponsorBackgroundImage from '../../assets/images/SponsorBackgroundImage.jpeg';
import { FaArrowRight, FaMailBulk, FaPen, FaPhone, FaUser } from 'react-icons/fa';

const BecomeASponsor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    businessEmail: '',
    companyName: '',
    companyDescription: '',
    phoneNumber: '',
    howDidYouHear: '',
  });

  const handleRegistrationInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateField = () => {
    const errors = {};
    if (!userFormData.firstName) errors.firstName = 'First name is required';
    if (!userFormData.lastName) errors.lastName = 'Last name is required';
    if (!userFormData.businessEmail) {
      errors.businessEmail = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(userFormData.businessEmail)) {
      errors.businessEmail = 'Invalid email format';
    }
    if (!userFormData.companyName) errors.companyName = 'Company name is required';
    if (!userFormData.companyDescription) errors.companyDescription = 'Company description is required';
    if (!userFormData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(userFormData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number (minimum 10 digits)';
    }
    if (!userFormData.howDidYouHear) errors.howDidYouHear = 'This field is required';
    return errors;
  };

 const handleRegistrationSubmit = async (event) => {
  event.preventDefault();
  
  const target = event.target;
  
  const date = new Date();
  const inputValue = {
    'Company Name': target.companyName.value,
    'Company Description': target.companyDescription.value,
    'Business Email': target.businessEmail.value,
    'First Name': target.firstName.value,
    'Last Name': target.lastName.value,
    'Phone Number': target.phoneNumber.value,
    'How did you hear about us?': target.howDidYouHear.value,
    'Created At': date.toLocaleString(),
  };
  console.log(inputValue);

  const APP_ID = 'AKfycbxV9Nl29tatMYl4WePjttscRSMEfRbs5URa-YWRwUuxT441MWEhTx9oSbUgl1MPH6kurQ'; // Replace with your actual Google Apps Script ID
  const baseURL = `https://script.google.com/macros/s/${APP_ID}/exec`;
  
  const formData = new FormData();
  Object.keys(inputValue).forEach((key) => {
    formData.append(key, inputValue[key]);
  });

  try {
    const res = await fetch(baseURL, {
      method: 'POST',
      body: formData,
    });
    if (res.ok) {
      console.log('Request was successful:', res);
    } else {
      console.log('Request Failed:', res);
    }
  } catch (e) {
    console.error('Error during fetch:', e);
  }
};
  return (
    <>
      <TheCareerCoreHeader />
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

              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
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
                        type="email"
                        placeholder="Business email"
                        name="businessEmail"
                        value={userFormData.businessEmail}
                        onChange={handleRegistrationInputChange}
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
                          value={userFormData.firstName}
                          onChange={handleRegistrationInputChange}
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
                        value={userFormData.lastName}
                        onChange={handleRegistrationInputChange}
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
                        placeholder="Helium health"
                        name="companyName"
                        value={userFormData.companyName}
                        onChange={handleRegistrationInputChange}
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
                      value={userFormData.companyDescription}
                      onChange={handleRegistrationInputChange}
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
                      value={userFormData.phoneNumber}
                      onChange={handleRegistrationInputChange}
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
                      name="howDidYouHear"
                      value={userFormData.howDidYouHear}
                      onChange={handleRegistrationInputChange}
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