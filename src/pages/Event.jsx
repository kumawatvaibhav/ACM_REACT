import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Components
import Involved from "../components/Get_involved";

// Images:
import Expert from "../assets/poster/Expert_talk.png";
import event from "../assets/poster/Events.webp";
import inaugration from "../assets/poster/inaugral_poster.webp";
import CodeWars from "../assets/poster/CodeWars_ACM.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const Event = () => {
  const [refInvolved, inViewInvolved] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refEvents, inViewEvents] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refPastEvents, inViewPastEvents] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="bg-gray-800 dark:bg-gray-800"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top Section */}
      <motion.section
        className="py-32 md:py-40 lg:py-48 bg-gray-800" // Increased padding from top
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <motion.div
              className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8 lg:pl-16"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Explore Upcoming Events
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Discover the latest initiatives and events organized by the ACM
                Student Chapter. Join our vibrant community and unlock a world
                of opportunities.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#events"
                  className="btn btn-primary btn-lg bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition"
                >
                  Join Now
                </a>
                <a
                  href="#get-involved"
                  className="btn btn-outline-secondary btn-lg border border-gray-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  Get Involved
                </a>
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-16"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
            >
              <motion.img
                src={event}
                alt="ACM Events"
                width="350px"
                height="350px"
                className="flex rounded-lg shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <motion.section
        id="events"
        ref={refEvents}
        className="bg-muted py-20 md:py-32 lg:py-40 text-white dark:bg-white-800"
        initial="hidden"
        animate={inViewEvents ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-5">
            <h1 className="text-blue-500 text-5xl font-bold">
              Upcoming Events
            </h1>
            <p className="mt-2 text-xl text-black-700 dark:text-gray-400">
              Check out our upcoming events and workshops to learn, network, and
              grow with the ACM community.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
            <motion.div
              className="text-center"
              initial="hidden"
              animate={inViewEvents ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <motion.img
                src={Expert}
                alt="Event 2"
                width="350px"
                height="350px"
                className="inline-block rounded-lg mx-auto"
                initial="hidden"
                animate={inViewEvents ? "visible" : "hidden"}
                variants={scaleIn}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Past Events */}
      <motion.section
        id="past-events"
        ref={refPastEvents}
        className="w-full py-20 md:py-32 lg:py-40 bg-light"
        initial="hidden"
        animate={inViewPastEvents ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <div className="container px-4 md:px-6">
          <div className="text-center mb-5">
            <h2 className="text-blue-500 text-5xl font-bold">Past Events</h2>
            <p className="mt-2 lead text-xl text-white">
              Explore our past events, workshops, and community initiatives to
              get a sense of what we've accomplished.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8"> {/* Updated flex to wrap and add space */}
            <motion.div
              className="text-center w-full md:w-1/3" // Added equal width for the events
              initial="hidden"
              animate={inViewEvents ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <motion.img
                src={inaugration}
                alt="Event 1"
                width="350px"
                height="350px"
                className="inline-block rounded-lg mx-auto"
                initial="hidden"
                animate={inViewEvents ? "visible" : "hidden"}
                variants={scaleIn}
              />
              <p className="card-text">
                <small className="text-rose-500">
                  <a
                    href="/event/Inaugral"
                    className="inline-block mt-4 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
                  >
                    Learn More
                  </a>
                </small>
              </p>
            </motion.div>

            <motion.div
              className="text-center w-full md:w-1/3"
              initial="hidden"
              animate={inViewEvents ? "visible" : "hidden"}
              variants={scaleIn}
            >
              <motion.img
                src={CodeWars}
                alt="Event 2"
                width="250px"
                height="250px"
                className="inline-block rounded-lg mx-auto"
                initial="hidden"
                animate={inViewEvents ? "visible" : "hidden"}
                variants={scaleIn}
              />
              <p className="card-text">
                <small className="text-rose-500">
                  <a
                    href="/event/CodeWars"
                    className="inline-block mt-4 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
                  >
                    Learn More
                  </a>
                </small>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Get Involved Section */}
      <Involved />
    </motion.div>
  );
};

export default Event;
