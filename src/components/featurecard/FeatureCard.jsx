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
    bgColor: 'bg-orange-100',
    pinColor: 'bg-orange-500',
  },
  {
    icon: <FaChalkboardTeacher className="text-white text-xl" />,
    title: 'Expert Speakers',
    description:
      'Learn from industry experts and thought leaders who share their insights and knowledge.',
    bgColor: 'bg-blue-100',
    pinColor: 'bg-blue-500',
  },
  {
    icon: <FaNetworkWired className="text-white text-xl" />,
    title: 'Career Growth Tools',
    description:
      'Discover tools and resources to help you advance your career and achieve your goals.',
    bgColor: 'bg-purple-100',
    pinColor: 'bg-purple-500',
  },
  {
    icon: <FaLightbulb className="text-white text-xl" />,
    title: 'Inspiring Innovation',
    description:
      'Ignite your creativity and discover new ways to stand out in a changing world.',
    bgColor: 'bg-pink-100',
    pinColor: 'bg-pink-500',
  },
];

const FeatureCard = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md p-6 ${feature.bgColor} hover:shadow-xl transition duration-300`}
          >
            {/* Icon Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full ${feature.pinColor} mb-4`}
            >
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
