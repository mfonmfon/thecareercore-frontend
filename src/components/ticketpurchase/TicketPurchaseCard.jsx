import React from 'react'
import TheCareerCoreHeader from '../thecareercoreheader/TheCareerCoreHeader';
import TicketHerosection from '../ticketherosection/TicketHerosection';
import { FaBaby, FaBath, FaBed, FaBroom, FaEthernet, FaFacebookMessenger, FaFolder, FaHeart, FaParking, FaPlaceOfWorship, FaShare, FaWeight } from 'react-icons/fa';
import PurchaseTicket from './PurchaseTicket';

const TicketPurchaseCard = () => {
  const [showMore, setShowMore] = React.useState(false);
  const fullText = `This is a detailed description of the property, providing all the necessary
   information that potential buyers or renters would need to know. It includes
    details about the location, amenities, and unique features of the property.`;
  const previewText = fullText.slice(0, 100); 
  return (
    <>
      <TheCareerCoreHeader/>
      <div className='w-full'>
        
        <>  
        {/* Herosection of the attendees */}
        <TicketHerosection />
        </>
     {/* Property Details Content */}
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
          32 Jalan Street, Lekki 129600
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="mr-2">8 mins (700m) from Clementi MRT (EW23)</span>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-6">
          <span className="rounded-lg bg-black text-white px-3 py-1 text-xs font-medium">Penthouse</span>
          <span className="rounded-lg bg-black text-white px-3 py-1 text-xs font-medium">Government papers</span>
        </div>

        {/* Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-xl py-6 px-4 mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-gray-900 mr-2">₦1,600,000</span>
            <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded">Starting price</span>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-700"><FaBed size={22}/> <span className="font-medium">3 bed</span></div>
            <div className="flex items-center gap-2 text-gray-700"><FaBath size={22}/> <span className="font-medium">2 bath</span></div>
            <div className="flex items-center gap-2 text-gray-700"><FaFolder size={22}/> <span className="font-medium">1,119 sqft</span></div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 mb-12">
          <h2 className="text-lg font-semibold mb-1">Description</h2>
          <h4 className="text-sm text-gray-800 font-medium mb-2">
            Rarely available super huge and well renovated condominium that is very near to Clementi MRT
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
          <h2 className="text-xl font-semibold mb-6">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-y-2 mb-4">
            <div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Property type</span><span className="font-semibold">Penthouse</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Furnishing</span><span className="font-semibold">Fully furnished</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Cost per square foot</span><span className="font-semibold">S$1,429 psf</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Developer</span><span className="font-semibold">United Property Holdings Pte Ltd</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Total units</span><span className="font-semibold">300</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Listing date</span><span className="font-semibold">16 Sept 2024</span></div>
            </div>
            <div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Floor Size</span><span className="font-semibold">1,119 sqft</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Floor Level</span><span className="font-semibold">19th Floor</span></div>
              <div className="flex flex-col justify-between mb-2 text-sm"><span className="text-gray-600">Listing ID</span><span className="font-semibold">210271231</span></div>
            </div>
          </div>
          <div className="text-sm text-gray-700 mt-2">There are <span className="font-bold">8</span> other listings in <span className="font-semibold">The Lekki Area</span> <a href="#" className="text-purple-700 font-semibold hover:underline">View now</a></div>
        </div>
        {/* Amenities Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Unit Features */}
            <div className="bg-gray-50 rounded-xl p-4 ">
              <h3 className="font-semibold mb-2 text-sm">Unit features</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>○ 3 Bedrooms</li>
                <li>○ 2 Baths</li>
                <li>○ Balcony</li>
                <li>○ Air-conditioning</li>
                <li>○ Store room</li>
                <li>○ Fully equipped Kit</li>
              </ul>
            </div>
            {/* Facilities */}
            <div className="bg-gray-50 rounded-xl p-4  col-span-2">
              <h3 className="font-semibold mb-2 text-sm">Facilities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-sm text-gray-700">
                <div className='flex items-center gap-2'><FaParking size={14}/> Carpark</div>
                <div className='flex items-center gap-2'><FaBath size={15} /> Swimming Pool</div>
                <div className='flex items-center gap-2'><FaBroom size={15} /> BBQ Pits</div>
                <div className='flex items-center gap-2'><FaBaby  size={15}/> Kid's Pool</div>
                <div className='flex items-center gap-2'><FaWeight size={15}/> Gym</div>
                <div className='flex items-center gap-2'><FaFolder size={15}/> Function rooms</div>
                <div className='flex items-center gap-2'><FaEthernet size={15}/> Tennis Court</div>
                <div className='flex items-center gap-2'><FaPlaceOfWorship size={15}/> Playground</div>
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
