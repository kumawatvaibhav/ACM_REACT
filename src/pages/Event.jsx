import React from 'react';
import { motion } from 'framer-motion';
import inaugration from '../assets/inaugration_poster.png';

const Event = () => {
  return (
    <motion.div
      className='bg-gray-800 py-12 md:py-24 lg:py-32 dark:bg-gray-800'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className='py-24 md:py-28 lg:py-32 bg-gray-100 dark:bg-gray-800'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col lg:flex-row items-center lg:items-start lg:justify-between'>
            <div className='text-center lg:text-left mb-8 lg:mb-0'>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white'>
                Explore Upcoming Events
              </h1>
              <p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
                Discover the latest initiatives and events organized by the ACM
                Student Chapter. Join our vibrant community and unlock a world
                of opportunities.
              </p>
              <div className='mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
                <a
                  href='#events'
                  className='btn btn-primary btn-lg bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition'
                >
                  Join Now
                </a>
                <a
                  href='#get-involved'
                  className='btn btn-outline-secondary btn-lg border border-gray-600 text-white-600 py-3 px-6 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-white transition'
                >
                  Get Involved
                </a>
              </div>
            </div>
            <div className='text-center lg:text-right mt-8 lg:mt-0'>
              <motion.img
                src={inaugration}
                alt='ACM Events'
                className='rounded-lg shadow-lg'
                height={450}
                width={450}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id='events'
        className='bg-muted py-12 md:py-24 lg:py-32 text-white dark:bg-white-800'
      >
        <div className='container px-10 md:px-6'>
          <div className='text-center mb-5'>
            <h2 className='display-5 font-bold'>Upcoming Events</h2>
            <p className='lead text-black-700 dark:text-gray-400'>
              Check out our upcoming events and workshops to learn, network, and
              grow with the ACM community.
            </p>
          </div>
          <div className='flex justify-center col-12 gap-12'>
            <div className='text-center mr-10'>
              <img
                src={inaugration}
                width='400'
                height='400'
                alt='Event 1'
                className='inline-block rounded-lg mx-auto'
              />
              <div className='card-body'>
                <h5 className='card-title'></h5>
                <p className='card-text'></p>
                <p className='card-text'>
                  <small className='text-rose-500'>
                    <a
                      href='/event_info'
                      className='inline-block mt-4 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition'
                    >
                      Learn More
                    </a>
                  </small>
                </p>
              </div>
            </div>
            <div className='text-center ml-10'>
              <img
                src='Yellow Modern Coming Soon (Facebook Post).png'
                width='400'
                height='400'
                alt='Event 1'
                className='inline-block rounded-lg mx-auto'
              />
              <div className='card-body'>
                <h5 className='card-title'></h5>
                <p className='card-text'></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='past-events'
        className='w-full py-12 md:py-24 lg:py-32 bg-light'
      >
        <div className='container px-4 md:px-6'>
          <div className='text-center mb-5'>
            <h2 className='display-5 font-bold'>Past Events</h2>
            <p className='lead text-gray-500 dark:text-gray-400'>
              Explore our past events, workshops, and community initiatives to
              get a sense of what we've accomplished.
            </p>
          </div>
          <div className='row g-4'>
            <div className='col-md-6'>
              <div className='card shadow-sm h-100'>
                <img
                  src='poster.jpg'
                  className='card-img-top'
                  alt='Past Event 1'
                />
                <div className='card-body'>
                  <h5 className='card-title'></h5>
                  <p className='card-text'></p>
                  <p className='card-text'>
                    <small className='text-muted'></small>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='card shadow-sm h-100'>
                <img
                  src='https://via.placeholder.com/550x310'
                  className='card-img-top'
                  alt='Past Event 2'
                />
                <div className='card-body'>
                  <h5 className='card-title'></h5>
                  <p className='card-text'>No Information Available</p>
                  <p className='card-text'>
                    <small className='text-muted'></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='get-involved'
        className='w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900 fade-in animate__animated animate__fadeIn'
      >
        <div className='container justify-content-center'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2 ml-20'>
              <div className='inline-block rounded-lg bg-acm-blue px-3 py-1 text-sm text-white'>
                Get Involved
              </div>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-5xl text-black dark:text-gray-100'>
                Join Our Chapter
              </h2>
              <p className='max-w-[900px] mb-20 text-gray-600 md:text-xl dark:text-gray-400'>
                Ready to be a part of something bigger? Sign up to become a
                member of the ACM Student Chapter and start your journey with
                us.
              </p>
              <a
                href='https://forms.gle/k4c9RHiJbGKWGxX7A'
                className='mt-10 text-acm-blue justify-content rounded-lg'
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Event;
