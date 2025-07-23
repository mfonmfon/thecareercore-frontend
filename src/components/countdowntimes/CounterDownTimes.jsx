import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const CounterDownTimes = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(event));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(event));
    }, 1000);
    return () => clearInterval(timer);
  }, [event]);

  if (!timeLeft) {
    return (
      <div className="text-center py-8">
        <p className="text-2xl font-semibold text-green-600">
          🎉 The event has started!
        </p>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section
      className="w-full  mx-auto  p-8   text-white"
      aria-label="Countdown timer"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {timeUnits.map(({ label, value }) => (
          <TimeBlock key={label} label={label} value={value} />
        ))}
      </div>
    </section>
  );
};

// ⏳ Time Calculation Logic
const calculateTimeLeft = (eventDate) => {
  const difference = new Date(eventDate) - new Date();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

// 🔢 Time Display Block with Animation
const TimeBlock = ({ label, value }) => {
  const paddedValue = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={paddedValue}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold bg-white text-black w-16 h-16 flex items-center justify-between"
        >
          {paddedValue}
        </motion.div>
      </AnimatePresence>
      <span className="mt-2 text-sm uppercase tracking-wide text-gray-400">
        {label}
      </span>
    </div>
  );
};

export default CounterDownTimes;
