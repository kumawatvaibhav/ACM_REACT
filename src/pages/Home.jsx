import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import video from '../assets/spline_3.mp4';
import Event from '../assets/Events.webp';
import institution from '../assets/sot_front_2.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  const [refHeader, inViewHeader] = useInView({ threshold: 0.1 });
  const [refPanel, inViewPanel] = useInView({ threshold: 0.1 });
  const [refInvolved, inViewInvolved] = useInView({ threshold: 0.1 });

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
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
        ></video>
      </div>

      <div className="min-h-screen flex flex-col text-white">
        <motion.header
          ref={refHeader}
          className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-transparent"
          initial="hidden"
          animate={inViewHeader ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="container text-center">
            <motion.h1
              className="text-5xl font-bold mb-6"
              variants={fadeInUp}
            >
              Welcome to the ACM Student Chapter
            </motion.h1>
            <motion.p
              className="text-lg md:text-2xl max-w-xl mx-auto"
              variants={fadeInUp}
            >
              Discover the world of computing and connect with like-minded students.
            </motion.p>
          </div>
        </motion.header>

        <motion.main
          className="flex-1 bg-gradient-to-b from-gray-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section
            id="panel"
            className="py-24 px-4 md:px-6 bg-gradient-to-t from-black to-gray-900"
          >
            <div className="container text-center">
              <motion.h2
                className="text-4xl font-extrabold text-blue-400 mb-4"
                ref={refPanel}
                initial="hidden"
                animate={inViewPanel ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Panel Series
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                initial="hidden"
                animate={inViewPanel ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Join us for a series of distinguished speaker sessions focusing on cutting-edge topics in Cybersecurity and IoT.
              </motion.p>
              <motion.div
                className="mt-8 flex justify-center"
                initial="hidden"
                animate={inViewPanel ? "visible" : "hidden"}
                variants={scaleIn}
              >
                <img
                  src={Event}
                  alt="Event"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>

          <section
            id="getInvolved"
            className="py-24 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900"
          >
            <div className="container text-center">
              <motion.h2
                className="text-4xl font-extrabold text-blue-400 mb-4"
                ref={refInvolved}
                initial="hidden"
                animate={inViewInvolved ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Get Involved
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                initial="hidden"
                animate={inViewInvolved ? "visible" : "hidden"}
                variants={fadeInUp}
              >
                Connect with like-minded individuals, participate in exclusive events, and make a difference in the computing community.
              </motion.p>
              <motion.div
                className="mt-8 flex justify-center"
                initial="hidden"
                animate={inViewInvolved ? "visible" : "hidden"}
                variants={scaleIn}
              >
                <img
                  src={institution}
                  alt="Institution"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </section>
        </motion.main>
      </div>
    </div>
  );
};

export default Home;
