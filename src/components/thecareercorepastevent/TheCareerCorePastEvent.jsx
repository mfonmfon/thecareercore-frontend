import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import EventImageOne from '../../assets/images/speakers/IMG_4790.PNG';
import EventImageTwo from '../../assets/images/speakers/IMG_4793.PNG';
import EventImageThree from '../../assets/images/speakers/IMG_4789.PNG';
import EventImageFour from '../../assets/images/speakers/IMG_4792.PNG';
import EventImageFive from '../../assets/images/speakers/IMG_4791.PNG';

const customerTestimonials = [
  { customerImage: EventImageOne },
  { customerImage: EventImageTwo },
  { customerImage: EventImageThree },
  { customerImage: EventImageFour },
  { customerImage: EventImageFive },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  cssEase: 'ease-in-out',
  arrows: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TheCareerCorePastEvent = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {customerTestimonials.map((customer, index) => (
            <div key={index} className="px-4">
              <div className=" rounded-xl  overflow-hidden">
                <img
                  src={customer.customerImage}
                  alt={`Event Image ${index + 1}`}
                  className="w-full md:max-w-lg h-[400px] sm:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TheCareerCorePastEvent;
