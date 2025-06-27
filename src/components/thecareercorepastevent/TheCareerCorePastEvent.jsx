import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import EventImageOne from '../../assets/images/speakers/IMG_4790.PNG'
import EventImageTwo from '../../assets/images/speakers/IMG_4793.PNG'
import EventImageThree from '../../assets/images/speakers/IMG_4789.PNG'
import EventImageFour from '../../assets/images/speakers/IMG_4792.PNG'
import EventImageFive from '../../assets/images/speakers/IMG_4791.PNG'

const customerTestimonials = [
  {
    // customersName: 'Sarah Thompson',
    // customerReview: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
    // customerOccupation: 'Content Creator',
    customerImage: EventImageOne,
  },
  {
    // customersName: 'John Roberts',
    // customerReview: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
    // customerOccupation: 'Entertainer',
    customerImage: EventImageTwo,
  },
  {
    // customersName: 'Emily Parker',
    // customerReview: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
    // customerOccupation: 'Non-Profit Coordinator',
    customerImage: EventImageThree,
  },
  {
    // customersName: 'Michael Osei',
    // customerReview: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
    // customerOccupation: 'UX Designer',
    customerImage: EventImageFour,
  },
  {
    // customersName: 'Amara Okafor',
    // customerReview: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it t",
    // customerOccupation: 'Startup Founder',
    customerImage: EventImageFive,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};


const TheCareerCorePastEvent = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 w-full">
      {/* Heading */}
      {/* <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Testimonials</h2>
        <p className="mt-2 text-gray-500">Real stories from happy homeowners</p>
      </div> */}
      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {customerTestimonials.map((customer, index) => (
            <div key={`${customer.customersName}-${index}`} className="px-4">
              <div className=" p-6 flex flex-col items-center text-center h-full  duration-300">
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
                  {/* “{customer.customerReview}” */}
                </p>
                <div className="flex-1 flex justify-center ">
                  <img
                    src={customer.customerImage}
                    alt={customer.customersName}
                    className="w-full h-auto max-w-lg rounded-lg shadow-lg object-cover object-center "
                  />
                  <div className="text-center sm:text-left">
                    {/* <h4 className="text-lg font-semibold text-gray-900">{customer.customersName}</h4> */}
                    {/* <p className="text-sm text-gray-500">{customer.customerOccupation}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default TheCareerCorePastEvent
