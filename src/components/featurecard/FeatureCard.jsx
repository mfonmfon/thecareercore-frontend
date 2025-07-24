import React from 'react';
import {
  FaUser,
  FaChalkboardTeacher,
  FaNetworkWired,
  FaLightbulb,
} from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaUser className="text-white text-xl" />,
    title: 'Community Networking',
    description:
      'Connect with ambitious peers and industry leaders to expand your professional network.',
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-xl" />,
    title: 'Expert Speakers',
    description:
      'Learn from industry experts and thought leaders who share their insights and knowledge.',
  },
  {
    icon: <FaNetworkWired className="text-white text-xl" />,
    title: 'Career Growth Tools',
    description:
      'Discover tools and resources to help you advance your career and achieve your goals.',
  },
  {
    icon: <FaLightbulb className="text-white text-xl" />,
    title: 'Inspiring Innovation',
    description:
      'Ignite your creativity and discover new ways to stand out in a changing world.',
  },
];

const FeatureCard = () => {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-8">
      <div className="max-w-8xl mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              {/* Icon with background circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 mb-4">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
