import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TheCareerCoreLogo  from '../../assets/images/TCC logo.png'
import CompletionLogo from '../../assets/images/Group 289539.png'
import AttendeesBackgroundImage from '../../assets/images/CompletionImage.jpeg'

const AttendeesRegisterationSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    const timer  = setTimeout(()=>{
      navigate('/')  
    }, 3000)

    return ()=> clearTimeout(timer)
  }, [navigate]);
  return (
    
       <div className='h-screen flex flex-col md:flex-row bg-white '>
    <div className='flex shrink-0 mt-7 md:mt-9 md:ml-8'>
          <img className='ml-8 h-8 w-auto' src={TheCareerCoreLogo} alt='logo'/>
        </div>
        {/* Left side of the page  */}
            <div className='flex-1 flex flex-col justify-center items-center p-8'>
              
              <div className=''>
                <div className='justify-center flex items-center flex-col mt-6 sm:mt-2'>
                <img className='md:w-2/3 w-1/2  md:p-4 p-4' src={CompletionLogo} alt='dogo' />
        
                <div className='text-center mt-10 sm:mt-5'>
                  <h2 className='text-3xl font-bold mb-2'>Completed !</h2>
                  <p className="text-gray-600 px-4 py-2 text-center text-base sm:text-lg md:text-xl leading-relaxed break-words">
                    You have successfully Registered<br />
                  </p>
                </div>
                </div>
              </div>
            </div>
          <div className="flex-1 hidden md:flex">
              <img 
                src={AttendeesBackgroundImage} 
                className="w-full h-full object-cover" 
                alt="Signup background"   
              />
            </div>
       </div>
  )
}

export default AttendeesRegisterationSuccessPage
