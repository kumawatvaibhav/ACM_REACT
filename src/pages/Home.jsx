import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import institution from '../assets/sot_front_2.jpeg';

const Home = () => {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full -z-10'>
        <Spline scene='https://prod.spline.design/lde62xMj3EFkmvVF/scene.splinecode' />
      </div>
      <div className='flex flex-col min-h-screen bg-transparent text-white pt-16'>
        {/* ACM Inaugural Event Section */}
        <motion.header
          className='flex items-center justify-center h-screen bg-transparent text-white py-12 md:py-20 lg:py-24'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6'>
            <motion.div
              className='flex flex-col gap-10 md:gap-12 md:w-1/2'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              <motion.h1
                className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Welcome to the ACM Student Chapter
              </motion.h1>
              <motion.div
                className='mt-5 max-w-[260px] inline-block rounded-lg bg-blue-700 px-3 py-1 text-sm'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Association for Computing Machinery
              </motion.div>
              <motion.p
                className='text-lg md:text-xl'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Discover the world of computing and connect with like-minded
                students.
              </motion.p>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content Section */}
        <motion.main
          className='flex-1 bg-gray-900'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section
            id='Institution'
            className='relative w-full h-screen py-12 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${institution})` }}
          >
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 container mx-auto px-4 md:px-6'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='flex flex-col items-center justify-center text-center'
              >
                <motion.h2
                  className='text-4xl font-bold text-white mb-6'
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  ABOUT INSTITUTION
                </motion.h2>
                <motion.p
                  className='max-w-3xl text-lg text-white leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  GSFC University is recognized under the Gujarat Private
                  University (Second Amendment) Act, 2014 and is established by
                  the GSFC Education Society - an initiative of Gujarat State
                  Fertilizers and Chemicals Ltd, Over six decades old industrial
                  giant, to continue the tradition of serving the community in
                  multiple ways. GSFC University follows 'बुद्धि ज्ञानेन
                  शुद्धधयती' principle as fundamental core of the University.
                  The vision behind establishing this distinct University is
                  societal development through relevant and cutting edge
                  knowledge in frontier areas of professional growth.
                </motion.p>
              </motion.div>
            </div>
          </section>
          <section
            id='ACM'
            className='relative w-full h-screen py-12 md:py-20 lg:py-24 bg-cover bg-blue-300 bg-no-repeat'
          >
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 container mx-auto px-4 md:px-6'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className='flex flex-col items-center justify-center text-center'
              >
                <motion.h2
                  className='text-4xl font-bold text-white mb-6'
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  ABOUT ACM
                </motion.h2>
                <motion.p
                  className='items-center justify-content text-center w-full text-md text-white leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  The Association for Computing Machinery (ACM) is the world's
                  largest educational and scientific computing society,
                  delivering resources that advance computing as a science and a
                  profession. Our student chapter is dedicated to fostering a
                  vibrant community of computer science enthusiasts. GSFC
                  Univeristy ACM Student Chapter was established in May, 2024
                  under the aegis of Department of Computer Science and
                  Engineering, GSFC University. The chapter aims at serving as a
                  dynamic hub of activities for the computing fraternity of the
                  University, where enthusiasts meet, interact and learn from
                  each other. The chapter aims to organize various events which
                  includes hackathons, technical workshops, talks by renowned
                  speakers, and coding competitions.
                </motion.p>
              </motion.div>
              <motion.div
                className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <motion.img
                  src={institution}
                  alt='About'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last ml-10'
                  width='300'
                  height='200'
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <div className='flex flex-col justify-center space-y-4 ml-10'>
                  <ul className='grid gap-6'>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>Our Mission</h3>
                        <p className='text-gray-800 dark:text-gray-800'>
                          To inspire and empower the next generation of computer
                          scientists and technologists.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>Our Vision</h3>
                        <p className='text-gray-800 dark:text-gray-800'>
                          To create a collaborative environment that fosters
                          innovation and excellence in computing.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='grid gap-1'>
                        <h3 className='text-xl font-bold'>Join Us</h3>
                        <p className='text-gray-800 dark:text-gray-800'>
                          Become a part of our community to grow your skills and
                          network with like-minded individuals.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>
        </motion.main>
      </div>
    </div>
  );
};

export default Home;
