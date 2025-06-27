import React from 'react'
import TheCareerCoreHeader from '../thecareercoreheader/TheCareerCoreHeader';
import TicketHerosection from '../ticketherosection/TicketHerosection';
import { FaBaby, FaBath, FaBed, FaBroom, FaEthernet, FaFacebookMessenger, FaFolder, FaHeart, FaParking, FaPeopleArrows, FaPeopleCarry, FaPlaceOfWorship, FaPlus, FaShare, FaSpeakerDeck, FaStripeS, FaWeight } from 'react-icons/fa';
import PurchaseTicket from './PurchaseTicket';

const TicketPurchaseCard = () => {
  const [showMore, setShowMore] = React.useState(false);
  const fullText = `The Career Core 25 is your gateway to high-impact career transformation.
Connect with 500+ professionals, hear from elite speakers across industries,
and engage in practical workshops designed to help you level up your career.

What you'll experience:
• Interactive career coaching
• Speed mentoring
• Resume & LinkedIn clinics
• Industry-specific networking
• Exclusive access to hiring companies

Limited tickets available. Book now.`;

  const previewText = fullText.slice(0, 100); 
  return (
    <>
      <TheCareerCoreHeader/>
      <div className='w-full'>
        
        <>  
        
        <TicketHerosection />
        </>
   
     <div className="flex flex-col lg:flex-row gap-8 mt-10 px-6 md:px-28">
      {/* Main Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-100 py-4 px-4 rounded-xl">
          <FaFacebookMessenger size={16} className="text-yellow-600" />
          <span className="text-sm text-gray-800 font-medium">
            We estimate this home will sell faster than 94% nearby
          </span>
        </div>

        {/* Published, Share, Like */}
        <div className="flex items-center justify-between mt-8 mb-6">
          <div>
            <span className="text-gray-500 text-sm">Published: </span>
            <span className="font-semibold text-gray-800">Sep 9, 2024</span>
          </div>
          <div className="flex gap-4">
            <button className="p-2 rounded-full hover:bg-gray-200"><FaHeart size={18} /></button>
            <button className="p-2 rounded-full hover:bg-gray-200"><FaShare size={18}/></button>
          </div>
        </div>

        {/* Title & Address */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">The Career Core 25</h1>
      <div className="text-base text-gray-700 mb-2">
        Landmark Event Centre, Victoria Island, Lagos
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <span className="mr-2">Saturday, Sept 27, 2025 — 9:00AM – 5:00PM</span>
      </div>


        {/* Tags */}
        <div className="flex gap-3 mb-6">
          <span className="rounded-lg bg-black text-white px-3 py-1 text-xs font-medium">Penthouse</span>
          <span className="rounded-lg bg-black text-white px-3 py-1 text-xs font-medium">Government papers</span>
        </div>

        {/* Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-xl py-6 px-4 mb-8">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-2xl font-bold text-gray-900 mr-2">₦10,000 – ₦15,000</span>
          <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded">Early bird pricing</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-gray-700"><FaSpeakerDeck size={22}/> <span className="font-medium">10 Speakers</span></div>
          <div className="flex items-center gap-2 text-gray-700"><FaPlus size={22}/> <span className="font-medium">10+ Sessions</span></div>
          <div className="flex items-center gap-2 text-gray-700"><FaPeopleArrows size={22}/> <span className="font-medium">500+ Attendees</span></div>
        </div>
      </div>


        {/* Description */}
        <div className="mt-6 mb-12">
          <h2 className="text-lg font-semibold mb-1">Event Overview</h2>
        <h4 className="text-sm text-gray-800 font-medium mb-2">
          Empower your career at one of Nigeria’s premier networking & upskilling events.
        </h4>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {showMore ? fullText : `${previewText}...`}
        </p>

          <button
            className="text-blue-600 hover:underline text-sm mt-2"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show less' : 'Show more'}
          </button>
        </div>

        {/* Details Section */}
        <div className="mb-12 ">
          <h2 className="text-xl font-semibold mb-6">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-2 mb-4">
              <div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Event Type</span><span className="font-semibold">Career Conference</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Organizer</span><span className="font-semibold">The Career Core</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Certification</span><span className="font-semibold">Yes – Digital badge</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Tracks</span><span className="font-semibold">Tech | Business | Creative</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Date</span><span className="font-semibold">Sept 27, 2025</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Duration</span><span className="font-semibold">8 hours</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Location</span><span className="font-semibold">Landmark Event Centre, Lagos</span>
                </div>
                <div className="flex flex-col justify-between mb-2 text-sm">
                  <span className="text-gray-600">Capacity</span><span className="font-semibold">500+</span>
                </div>
              </div>
            </div>
        </div>
        {/* Amenities Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">What’s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="font-semibold mb-2 text-sm">Learning Tracks</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>○ Tech & Digital Skills</li>
                <li>○ Entrepreneurship & Business</li>
                <li>○ Creative Industry Insights</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 col-span-2">
              <h3 className="font-semibold mb-2 text-sm">Features & Benefits</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-700">
                <div className='flex items-center gap-2'><FaWeight size={15}/> Career Mentoring</div>
                <div className='flex items-center gap-2'><FaFolder size={15}/> Resume Reviews</div>
                <div className='flex items-center gap-2'><FaHeart size={15}/> Wellness Lounge</div>
                <div className='flex items-center gap-2'><FaShare size={15}/> Networking Hub</div>
                <div className='flex items-center gap-2'><FaBath size={15}/> Coffee & Snacks</div>
                <div className='flex items-center gap-2'><FaPlaceOfWorship size={15}/> Certificate Access</div>
              </div>
            </div>
          </div>

        </div>
        

      </div>

      {/* This is where the sidebar is going to be put  */}
      {/* <ScheduleTourAndContactUsSideBar/> */}
      <PurchaseTicket />
    </div>
    </div>
    
    </>
  );
}

export default TicketPurchaseCard
