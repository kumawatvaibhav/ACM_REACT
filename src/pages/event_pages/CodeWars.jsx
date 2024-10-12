import React from "react";
import { motion } from "framer-motion";
import CodeWar from "../../assets/poster/CodeWars_ACM.jpg";

//Images :
import Winner1 from "../../assets/Gallery/CodeWars/Winner1.jpg";
import Winner2 from "../../assets/Gallery/CodeWars/Winner2.jpg";
import Winner3 from "../../assets/Gallery/CodeWars/Winner3.jpg";

//Image Slider : 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import eventPhoto1 from "../../assets/Gallery/CodeWars/Codewars_1.jpg";
import eventPhoto2 from "../../assets/Gallery/CodeWars/Codewars_2.jpg";
import eventPhoto3 from "../../assets/Gallery/CodeWars/Codewars_3.jpg";
import eventPhoto4 from "../../assets/Gallery/CodeWars/Codewars_4.jpg";
import eventPhoto5 from "../../assets/Gallery/CodeWars/Codewars_5.jpg";
import eventPhoto6 from "../../assets/Gallery/CodeWars/Codewars_6.jpg";
import eventPhoto7 from "../../assets/Gallery/CodeWars/Codewars_7.jpg";
import eventPhoto8 from "../../assets/Gallery/CodeWars/Codewars_8.jpg";
import eventPhoto9 from "../../assets/Gallery/CodeWars/Codewars_9.jpg";
import eventPhoto10 from "../../assets/Gallery/CodeWars/Codewars_10.jpg";



// Programming languages logos or illustrations
import JSLogo from "../../assets/Logo/JS_Logo.png"; // Example of a JavaScript logo
import PythonLogo from "../../assets/Logo/PYTHON_Logo.png"; // Example of a Python logo
import HTMLLogo from "../../assets/Logo/C_Logo.png"; // Example of an HTML logo

const CodeWars = () => {

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px', // Medium height
    backgroundSize: 'contain', // Ensure the image is not cropped
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const slideImages = [
    {
      url: eventPhoto1,
    },
    {
      url: eventPhoto2,
    },
    {
      url: eventPhoto3,
    },
    {
      url: eventPhoto4,
    },
    {
      url: eventPhoto5,
    },
    {
      url: eventPhoto6,
    },
    {
      url: eventPhoto7,
    },
    {
      url: eventPhoto8,
    },
    {
      url: eventPhoto9,
    },
    {
      url: eventPhoto10,
    }
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 text-white pt-16">
      {/* Hero Section */}
      <motion.header
        className="relative flex items-center justify-center lg:h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-blue-900 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Programming Language Logos Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src={JSLogo}
            alt="JavaScript"
            className="absolute w-32 top-10 left-16 animate-bounce"
          />
          <img
            src={PythonLogo}
            alt="Python"
            className="absolute mix-blend-overlay w-40 bottom-20 right-32 animate-spin "
          />
          <img
            src={HTMLLogo}
            alt="HTML"
            className="absolute w-24 bottom-10 left-10 animate-pulse mix-blend-multiply"
          />
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 z-10 sm:mt-20 md:mt-15 lg:mt-10">
          {/* Event Title */}
          <motion.div
            className="flex flex-col gap-5 md:gap-6 md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl mt-10 lg:mt-10">
              Code Wars 2024
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              September 30, 2024 | SOT Class-Room No.10
            </p>
            <div className="mt-5 max-w-fit inline-block rounded-lg bg-blue-700 px-4 py-2 text-lg">
              ACM @ GSFCU
            </div>
            <p className="max-w-lg text-gray-300 md:text-xl mt-4">
              Join us for an epic competition where developers battle it out to
              solve coding challenges and win amazing prizes!
            </p>
            <div className="mt-4">
              <span className="inline-block bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg">
                Prize Pool: ₹3000
              </span>
            </div>
          </motion.div>

          {/* Poster Image */}
          <motion.div
            className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img
              width="350"
              height="350"
              alt="Code Wars Poster"
              src={CodeWar}
              className="rounded-lg max-w-full hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Event Details Section */}
      <motion.main
        className="flex-1 bg-gray-900 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="w-full py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="grid gap-8 md:grid-cols-2"
            >
              {/* Left Column - Event Details */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Event Details</h2>
                <div className="space-y-6 text-gray-400">
                  <div>
                    <h3 className="text-lg font-semibold">Description</h3>
                    <p className="mt-2">
                      Code Wars is a competitive programming event where
                      students can showcase their coding skills, solve
                      challenges, and earn recognition. CodeWars, hosted by ACM
                      Student Chapter at GSFC University, is a team-based
                      competitive programming event. Only teams with 2 or 3
                      members are eligible to participate in the event. It
                      features three elimination rounds with 10 minute breaks in
                      between, limited to the first 25 registered teams.
                      Participants will use C and Python languages, with online
                      resources permitted only in the first round. Laptops will
                      only be required in the final round. Participants are
                      advised to ensure their devices are fully charged, as no
                      charging provisions will be available at the venue.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {/* <!-- Calendar Header --> */}
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <path d="M8 2v4M16 2v4M3 10h18" />

                      {/* <!-- Calendar Dates (simplified) --> */}
                      <path d="M7 14h2M11 14h2M15 14h2" />
                      <path d="M7 18h2M11 18h2M15 18h2" />
                    </svg>
                    <p>30th September 2024</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <p>1PM @ SOT Class-Room No. 10, GSFCU</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Agenda */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Agenda</h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center justify-between">
                    <span>Introduction & Welcome</span>
                    <span>1:00 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Round 1 Quiz</span>
                    <span>1:35 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Round 2 Quiz</span>
                    <span>2:20 PM</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Round 3 Coding Challenge</span>
                    <span>3:15 PM</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Winner Podium Section */}
        <section className="w-full py-12 md:py-20 lg:py-24 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Event Winners
            </h2>

            {/* Podium */}
            <div className="flex justify-center items-end gap-6">
              {/* Second Place */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-600 rounded-t-lg flex justify-center items-center">
                  <img
                    src={Winner2}
                    alt="Second Place"
                    className="h-[350px] w-[350px] object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-xl font-semibold mt-2 mb-1">Pro Coders</p>
                <div className="bg-gray-700 w-32 md:w-44 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-400">2</span>
                </div>
              </motion.div>

              {/* First Place (Center and tallest podium) */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-600 rounded-t-lg flex justify-center items-center">
                  <img
                    src={Winner1}
                    alt="First Place"
                    className="w-[350px] h-[350px] object-cover rounded-t-lg"
                  />
                </div>
                <p className="text-xl font-semibold mt-2 mb-1">
                  Team Tech Tripods
                </p>
                <div className="bg-gray-700 w-40 md:w-52 h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold text-yellow-400">1</span>
                </div>
              </motion.div>

              {/* Third Place */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="flex flex-col items-center"
              >
                <div className="bg-gray-600 rounded-t-lg flex justify-center items-center">
                  <img
                    src={Winner3}
                    alt="Third Place"
                    className="w-[350px] h-[350px] object-cover rounded-t-lg"
                  />
                </div>
                <p className="text-xl font-semibold mt-2 mb-1">
                  Team Straw Hat Pirates
                </p>
                <div className="bg-gray-700 w-28 md:w-40 h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-yellow-400">3</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Event Gallery Section */}
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
};

export default CodeWars;
