import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion'; // for animation we are using motion-framer
import { useInView } from 'react-intersection-observer';


// images and video
import logo from '/logo.webp';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import EventSection from '../components/EventSection';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Home = () => {
  const [refHeader, inViewHeader] = useInView({ threshold: 0.5 });
  const [refPanel, inViewPanel] = useInView({ threshold: 0.5 });
  const [refInvolved, inViewInvolved] = useInView({ threshold: 0.5 });

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video
          ref={videoRef}
          src={'https://res.cloudinary.com/ddpmw1pgg/video/upload/v1735365703/spline_3_lk9gne.mp4'}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        ></video>
      </div>
      <div className="flex flex-col min-h-screen bg-transparent text-white pt-16">
        <motion.header
          ref={refHeader}
          className="flex items-center justify-center h-screen bg-transparent text-white py-12 md:py-20 lg:py-24"
          initial="hidden"
          animate={inViewHeader ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
            <motion.div
              className="flex flex-col gap-5 md:gap-6 md:w-1/2"
              initial="hidden"
              animate={inViewHeader ? 'visible' : 'hidden'}
              variants={fadeInUp}
            >
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                variants={fadeInUp}
              >
                Welcome to the
              </motion.h1>
              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                variants={fadeInUp}
              >
                ACM Student Chapter
              </motion.h1>
              <motion.div
                className="mt-5 max-w-[260px] inline-block rounded-lg bg-blue-700 px-3 py-1 text-sm"
                variants={scaleIn}
              >
                Association for Computing Machinery
              </motion.div>
              <motion.p className="text-lg md:text-xl" variants={fadeInUp}>
                Discover the world of computing and connect with like-minded
                students.
              </motion.p>
            </motion.div>
          </div>
        </motion.header>

        {/* Main Content Section */}
        <AboutSection/>
        
        <motion.main
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          {/* Team Section */}
          <section
            id="Team"
            className="py-8 md:py-18 lg:py-20 flex justify-center rounded-full"
          >
          <TeamSection/>
          </section>

          <section id="Event" className="py-8 md:py-18 lg:py-20 flex justify-center rounded-full">
            <EventSection/>
          </section>

           {/* GET INVOLVED SECTION */}
           <section
            id="getInvolved"
            className="py-8 md:py-18 lg:py-20 flex justify-center rounded-full"
          >
            <div className="container max-w-6xl bg-gradient-to-b from-cyan-900 to-indigo-950 rounded-3xl shadow-lg p-8 border border-cyan-600 relative">
              <div className="flex flex-col items-center justify-center space-y-4 text-center ">
                <motion.div
                  ref={refInvolved}
                  className="space-y-2"
                  initial="hidden"
                  animate={inViewInvolved ? "visible" : "hidden"}
                  variants={fadeInUp}
                >
                  <motion.div
                    className="inline-block rounded-lg bg-white px-3 py-1 text-md text-gray-800 dark:text-blue-800"
                    variants={scaleIn}
                  >
                    Get Involved
                  </motion.div>
                  <motion.h2
                    className="text-3xl font-extrabold tracking-tight sm:text-5xl text-blue-500 dark:text-blue-500"
                    variants={fadeInUp}
                  >
                    Join the ACM Student Chapter
                  </motion.h2>
                  <motion.p
                    className="max-w-[900px] md:text-xl text-gray-400"
                    variants={fadeInUp}
                  >
                    Be a part of the global computing community and advance your
                    career through our various programs and events.
                  </motion.p>
                </motion.div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12 slide-up">
                <motion.img
                  src={logo}
                  alt="Join ACM"
                  className="mx-auto overflow-hidden rounded-xl object-contain shadow-lg transition duration-300 hover:scale-[1.03]"
                  style={{ maxWidth: "100%", maxHeight: "auto" }}
                  initial="hidden"
                  animate={inViewInvolved ? "visible" : "hidden"}
                  variants={scaleIn}
                />
                <div
                  className="flex flex-col justify-center space-y-4"
                  initial="hidden"
                  animate={inViewInvolved ? "visible" : "hidden"}
                  variants={fadeInUp}
                >
                  <motion.h3
                    className="text-xl font-bold text-white dark:text-black-800"
                    variants={fadeInUp}
                  >
                    Join Us
                  </motion.h3>
                  <motion.p className="text-gray-400" variants={fadeInUp}>
                    Join the ACM Student Chapter to enhance your knowledge,
                    network with professionals, and gain valuable experience in
                    the field of computing.
                  </motion.p>
                  <motion.a
                    href="https://forms.gle/k4c9RHiJbGKWGxX7A"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-acm-blue hover:underline underline-offset-4 transition duration-200"
                    variants={fadeInUp}
                  >
                    <span>Sign Up Now</span>
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.41l2.3 2.3a1 1 0 01-1.42 1.42L11 9.42V14a1 1 0 11-2 0V9.42L7.12 10.7a1 1 0 01-1.42-1.42l2.3-2.3a1 1 0 011.41 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </section>
        </motion.main>
      </div>
    </div>
  );
};

export default Home;
