import React from 'react';
import { motion } from 'framer-motion';
import Poster from '../assets/Seminar_1.png';

const EventInfo = () => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white pt-16'>
      {/* ACM Inaugural Event Section */}
      <motion.header
        className='flex items-center justify-center h-screen bg-gray-800 text-white py-12 md:py-20 lg:py-24'
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
              ACM Inaugural Event
            </motion.h1>
            <motion.p
              className='text-lg md:text-xl'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              August 1, 2024 | FertilizarNagar Auditorium
            </motion.p>
            <motion.div
              className='mt-5 inline-block rounded-lg bg-blue-700 px-3 py-1 text-sm'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Association for Computing Machinery
            </motion.div>
            <motion.p
              className='max-w-[600px] text-gray-300 md:text-xl'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Join us for the ACM event, where industry leaders and innovators
              come together to share insights, network, and explore the latest
              advancements in computing.
            </motion.p>
          </motion.div>
          <motion.div
            className='mt-10 md:mt-0 md:w-1/2 flex justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.img
              width='350'
              height='350'
              alt='poster'
              src={Poster}
              className='rounded-lg max-w-full transform hover:scale-105 transition-transform duration-300'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
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
        <section className='w-full py-12 md:py-20 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className='grid gap-6 md:grid-cols-2 md:gap-12'
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                  Event Details
                </h2>
                <div className='mt-6 space-y-4'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <h3 className='text-lg font-semibold'>Description</h3>
                    <p className='text-gray-400'>
                      The upcoming event promises to expand your horizons in the
                      transformative fields of Artificial Intelligence and Data
                      Science. Join us for insightful discussions and
                      thought-provoking presentations from two distinguished
                      speakers, each bringing a wealth of knowledge and unique
                      perspective on pressing topics in technology.
                    </p>
                  </motion.div>
                  <motion.div
                    className='mt-6 flex items-center gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6 text-blue-400'
                    >
                      <path d='M8 2v4'></path>
                      <path d='M16 2v4'></path>
                      <rect width='18' height='18' x='3' y='4' rx='2'></rect>
                      <path d='M3 10h18'></path>
                    </svg>
                    <p>August 1, 2024</p>
                  </motion.div>
                  <motion.div
                    className='mt-2 flex items-center gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='h-6 w-6 text-blue-400'
                    >
                      <line x1='2' x2='5' y1='12' y2='12'></line>
                      <line x1='19' x2='22' y1='12' y2='12'></line>
                      <line x1='12' x2='12' y1='2' y2='5'></line>
                      <line x1='12' x2='12' y1='19' y2='22'></line>
                      <circle cx='12' cy='12' r='7'></circle>
                    </svg>
                    <p>FertilizarNagar Auditorium, GSFC, Vadodara</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <h3 className='text-lg font-semibold'>Agenda</h3>
                    <ul className='space-y-2 text-gray-400'>
                      <li>
                        <div className='flex items-center justify-between'>
                          <span>To be declared soon</span>
                          <span>9:00 AM - 3:00 PM</span>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
                  Speakers
                </h2>
                <div className='mt-6 space-y-6'>
                  <motion.div
                    className='flex items-start gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <span className='relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full'>
                        <motion.img
                          className='aspect-square h-full w-full'
                          src='/pk_guru.png'
                          alt='Dr. Ponnurangam Kumaraguru'
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1 }}
                        />
                      </span>
                      <h3 className='text-lg font-semibold'>
                        Dr. Ponnurangam Kumaraguru
                      </h3>
                      <p className='text-gray-400'>
                        Vice President of ACM India
                      </p>
                      <p className='text-gray-400'>
                        Dr. Ponnurangam Kumaraguru ("PK") is a Professor of
                        Computer Science at IIIT-Hyderabad. PK is an ACM India
                        Council Member, currently serving as Vice President and
                        Chair of the Research Facilitation Committee of ACM
                        India. PK received his Ph.D. from the School of Computer
                        Science at Carnegie Mellon University (CMU). His Ph.D.
                        thesis work on anti-phishing research at CMU contributed
                        in creating an award-winning startup. He has co-authored
                        research papers in the field of Computational Social
                        Science, Privacy and Security in Online Social Media,
                        Cyber Security, Social Computing, Data Science for
                        Social Good, amongst others.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className='flex items-start gap-4'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <span className='relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full'>
                        <motion.img
                          className='aspect-square h-full w-full'
                          src='/pk_guru.png'
                          alt='Dr. Rutvi Shah'
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1 }}
                        />
                      </span>
                      <h3 className='text-lg font-semibold'>Dr. Rutvi Shah</h3>
                      <p className='text-gray-400'>
                        Chair of ACM India - W Committee
                      </p>
                      <p className='text-gray-400'>
                        Dr. Rutvi Shah is an Assistant Professor of Computer
                        Science at SVGU, Ahmedabad. Rutvi Shah is currently
                        serving as Chair of ACM India - W Committee, she has
                        been volunteering for ACMI-W since 2015, and has been
                        instrumental in organizing events, conferences,
                        workshops, and seminars focused on women in computing.
                        She holds a PhD in Computer Science with research area
                        focused on automated systems for medical image
                        processing. Also, she has undertaken research endeavors
                        encompassing the realm of Data Science, Machine
                        Learning, and its affiliated areas.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
};

export default EventInfo;
