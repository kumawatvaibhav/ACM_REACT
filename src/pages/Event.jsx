import React, { useRef } from "react";
import { motion } from "framer-motion";

// Components
import { Timeline } from "../components/ui/timeline";
import { Button } from "../components/ui/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Event = () => {
  const timelineRef = useRef(null); // Ref for the Timeline section

  const scrollToTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = [
    {
      title: "Expert Talk",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Vladan Devedzic Professor of Computer Science, University of Belgrade, 
          Serbia will be delivering an online talk on Artificial Intelligence: I'll see you on the dark side of the Moon.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/Expert_talk_j2r4nu.png"
              alt="startup template"
              className="rounded-lg object-cover h-50 md:h-60 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      link: "/event/Darkside"
    },
    {
      title: "Code Wars 2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Join us for an epic competition where developers battle it out to solve coding challenges and win amazing prizes!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774286/CodeWars_ACM_ydhqua.jpg"
              alt="hero template"
              className="rounded-lg object-cover h-50 md:h-60 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      link: "/event/CodeWars"
    },
    {
      title: "ACM Inaugural Event",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Join us for the ACM event, where industry leaders and innovators come together to share insights, 
          network, and explore the latest advancements in computing.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/inaugral_poster_oeaxau.jpg"
              alt="Inaugural Event"
              className="rounded-lg object-cover h-50 md:h-60 lg:h-80 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
      link: "/event/inaugural"
    },
  ];

  return (
    <motion.div
      className="bg-gray-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Content Container */}
      <div className="relative z-10">
        {/* Top Section */}
        <motion.section
          className="py-32 md:py-28 lg:py-36 flex items-center justify-center min-h-screen"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                className="w-full lg:w-2/3 mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-50">
                  Discover Our Events
                </h1>
                <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
                  Explore the latest initiatives and events organized by our ACM
                  Student Chapter. Join our vibrant community and unlock a world
                  of opportunities.
                </p>
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-gradient-to-b from-teal-300 to-teal-500 rounded-2xl"
                    onClick={scrollToTimeline} // Attach the scroll function here
                  >
                    Explore Events
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <section id="timeline" ref={timelineRef}>
          <Timeline data={data} />
        </section>
      </div>
    </motion.div>
  );
};

export default Event;
