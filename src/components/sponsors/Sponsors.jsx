import React from 'react';
import Marquee from 'react-fast-marquee';
import ShuttlerLogo from '../../assets/images/shuttler-logo.jpeg'
import CarbonBankLogo from '../../assets/images/carbonbank.png'
import MonipointLogo from '../../assets/images/moniepoint-logo.png'
import ChowdeckLogo from '../../assets/images/chowdeck-logo.jpeg'
import CowrywiseLogo from '../../assets/images/cowrywise-logo.png'
import NviteLogo from '../../assets/images/Invitte Logo.png'
import TheNewYaba from '../../assets/venueimage/TheNewYaba.png'
import LightWork from '../../assets/venueimage/lightwork PNG.png'
import GrayzLogoPres from '../../assets/venueimage/GrayzLogoPres.png'
import FirstLogo from '../../assets/venueimage/FirsLogo.jpg'


const sponsorsData = [
  {
    id: 1,
    image: TheNewYaba,
    link: '',
  },
  {
    id: 1,
    image: LightWork,
    link: '',
  },
  {
    id: 1,
    image: FirstLogo,
    link: '',
  },
  {
    id: 1,
    image: GrayzLogoPres,
    link: '',
  },
  // {
  //   id: 1,
  //   image: ShuttlerLogo,
  //   link: 'https://my.shuttlers.co/auth/general/register',
  // },
  {
    id: 1,
    image: NviteLogo,
    link: 'https://my.shuttlers.co/auth/general/register',
  },
];

const Sponsors = () => {
  return (
    <section className="py-17 bg-white">
      <h2 className="text-center text-2xl md:text-6xl font-semibold mb-20 text-gray-800">Our Sponsors</h2>
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        {sponsorsData.map((sponsor) => (
          <a
            key={sponsor.id}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-8 flex items-center"
          >
            <img
              src={sponsor.image}
              alt={`Sponsor ${sponsor.id}`}
              className="h-14 md:h-20 object-contain "
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default Sponsors;
