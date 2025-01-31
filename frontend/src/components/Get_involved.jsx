import React from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Involved = () => {
  const [refInvolved, inViewInvolved] = useInView({ threshold: 0.1 });

  return (
    <div>
      <section
        id="getInvolved"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-indigo-950"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
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
              src={'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734863660/assets/lo2gnmd5kdhwkujipbos.webp'}
              alt="Join ACM"
              className="mx-auto overflow-hidden rounded-xl object-contain shadow-lg transition duration-300 hover:scale-[1.03]"
              style={{ maxWidth: "100%", maxHeight: "350px" }}
              initial="hidden"
              animate={inViewInvolved ? "visible" : "hidden"}
              variants={scaleIn}
            />
            <motion.div
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
                Join the ACM Student Chapter to enhance your knowledge, network
                with professionals, and gain valuable experience in the field of
                computing.
              </motion.p>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8NeGFIU_0QfyVD0fozG0sj5xv44OjGW15WpRo1BGvHCQuWg/viewform?usp=dialog"
                className="inline-flex items-center space-x-2 text-sm font-medium text-acm-blue hover:underline underline-offset-4 transition duration-200"
                variants={fadeInUp}
              >
                <span className="text-white">Sign Up Now</span>
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Involved;
