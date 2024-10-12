import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// team images
import nandish from '../assets/officers/Team/nandish_2.jpeg';
import tejas from '../assets/officers/Team/tejas_2.jpg';
import kanika from '../assets/officers/Team/Kanika_3.jpg';
import shreya from '../assets/officers/Team/Shreya_2.jpg';
import Mosam_mam from '../assets/officers/Team/Mosam_mam.jpeg';
import chirag from '../assets/officers/Team/Chirag_2.png';
import vaibhav from '/user.png';

const teamMembers = [
  {
    name: 'Nandish Mittal',
    role: 'Chair',
    imageUrl: nandish,
    description: '',
  },
  {
    name: 'Tejas Mistry',
    role: 'Vice Chair',
    imageUrl: tejas,
    description: '',
  },
  {
    name: 'Kanika Sharma',
    role: 'Secretary',
    imageUrl: kanika,
    description: '',
  },
  {
    name: 'Chirag Parmer',
    role: 'Treasurer',
    imageUrl: chirag,
    description: '',
  },
  {
    name: 'Vaibhav Kumawat',
    role: 'Web Master & Tech Lead',
    imageUrl: vaibhav,
    description: '',
  },
  {
    name: 'Shreya Dholiya',
    role: 'Membership Chair',
    imageUrl: shreya,
    description: '',
  },
  {
    name: 'Ms. Mosam Patel',
    role: 'Faculty Sponsor',
    imageUrl: Mosam_mam,
    description: '',
  },
];

const Team = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    });
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-indigo-950">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-blue-600 opacity-70 animate-pulse"></div>
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="mt-10 text-3xl font-bold tracking-tighter text-white sm:text-5xl">Meet Our Team</h2>
          <p className="mt-5 max-w-[900px] mx-auto text-gray-200 md:text-xl lg:text-base xl:text-xl">
            Get to know the dedicated individuals who drive our organization.
          </p>
        </div>
        <div ref={ref} className="flex flex-wrap items-center justify-center gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg p-6 shadow-lg max-w-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              whileHover={{ scale: 1.05 }}
            >
              <img
                className="w-48 h-48 rounded-full mx-auto"
                src={member.imageUrl}
                alt={member.name}
              />
              <h3 className="mt-4 text-xl font-bold text-white text-center">{member.name}</h3>
              <h4 className="text-md font-medium text-amber-400 text-center">{member.role}</h4>
              <p className="mt-2 text-gray-700 dark:text-gray-400 text-center">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
