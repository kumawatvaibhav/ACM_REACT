import React from "react";
import { motion } from "framer-motion";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Darkside() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "500px", // Medium height
    backgroundSize: "contain", // Ensure the image is not cropped
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const slideImages = [
    {
      url: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/jwglypy6ctqflpjbw8y5.jpg",
    },
    {
      url: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/czi5gv7y55uabkyjyzwj.jpg",
    },
    {
      url: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/st20e0suka7lvmtqdc9y.jpg",
    },
    {
      url: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/ztiaz6cfr9qcgunqjjsu.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white pt-16">
      {/* Header */}
      <motion.header
        className="flex items-center justify-center lg:h-screen bg-transparent text-white py-12 md:py-20 lg:py-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <motion.div
            className="flex flex-col gap-5 md:gap-6 md:w-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Expert Talk
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              4th October 2024
            </motion.p>
            <motion.div
              className="mt-5 max-w-[260px] inline-block rounded-lg bg-blue-700 px-3 py-1 text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Association for Computing Machinery
            </motion.div>
            <motion.p
              className="max-w-[600px] text-gray-300 md:text-xl"
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
            className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.img
              width="350"
              height="350"
              alt="poster"
              src={
                "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/Expert_talk_j2r4nu.png"
              }
              className="rounded-lg max-w-full transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Content Container */}
      <motion.main
        className="flex-1 bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="grid gap-6 md:grid-cols-2 md:gap-12"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Event Details
                </h2>
                <div className="mt-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="text-gray-400 text-justify">
                      Vladan Devedzic Professor of Computer Science, University
                      of Belgrade, Serbia will be delivering an online talk on
                      Artificial Intelligence: I'll see you on the dark side of
                      the Moon.
                    </p>
                  </motion.div>
                  <motion.div
                    className="mt-6 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <p>4th October 2024</p>
                  </motion.div>
                  <motion.div
                    className="mt-2 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <line x1="2" x2="5" y1="12" y2="12"></line>
                      <line x1="19" x2="22" y1="12" y2="12"></line>
                      <line x1="12" x2="12" y1="2" y2="5"></line>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                      <circle cx="12" cy="12" r="7"></circle>
                    </svg>
                    <p>https://meet.google.com/fiq-gqwa-pjz</p>
                  </motion.div>
                  <motion.div
                    className="mt-2 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <line x1="2" x2="5" y1="12" y2="12"></line>
                      <line x1="19" x2="22" y1="12" y2="12"></line>
                      <line x1="12" x2="12" y1="2" y2="5"></line>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                      <circle cx="12" cy="12" r="7"></circle>
                    </svg>
                    <p>https://www.youtube.com/watch?v=US6LKzLMJuI</p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">
                Event Gallery
              </h2>
              <div className="sm:py-2 md:py-5 lg:py-10 slide-container">
                <Slide
                  easing="ease"
                  duration={3000}
                  className="mt-6"
                  indicators={true}
                  autoplay={true}
                  arrows={true}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                    },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                  ]}
                >
                  {slideImages.map((image, index) => (
                    <div key={index}>
                      <div
                        style={{
                          ...divStyle,
                          backgroundImage: `url(${image.url})`,
                        }}
                      />
                    </div>
                  ))}
                </Slide>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
