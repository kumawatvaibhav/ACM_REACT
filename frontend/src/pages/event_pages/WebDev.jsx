import React from 'react';
import { motion } from 'framer-motion';

//for image slider : 
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Inaugral = () => {

  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px', // Medium height
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const slideImages = [
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141041/assets/Gallery/Web%20Dev%20With%20Vaibhav/zdrzdlzpn5oja0raktkv.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740142910/assets/Gallery/Web%20Dev%20With%20Vaibhav/jenv3vqxcvtvnigcfops.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740142893/assets/Gallery/Web%20Dev%20With%20Vaibhav/am5ze005lbfxrjxp2bds.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141041/assets/Gallery/Web%20Dev%20With%20Vaibhav/ng5quy2ou1thzuvszbuz.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141040/assets/Gallery/Web%20Dev%20With%20Vaibhav/rsrwm2pwtuocsznxpsqu.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141040/assets/Gallery/Web%20Dev%20With%20Vaibhav/r8rtpzpuvesvynddqobb.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141040/assets/Gallery/Web%20Dev%20With%20Vaibhav/ahr2f9h8tgxsf0v9truf.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141041/assets/Gallery/Web%20Dev%20With%20Vaibhav/zbaafddjmbwsru7a36gr.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740142897/assets/Gallery/Web%20Dev%20With%20Vaibhav/k0p1kiamelwgjirey5ir.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740142900/assets/Gallery/Web%20Dev%20With%20Vaibhav/qs1bslxflc2ccrg1nsa2.jpg',
    },
    {
      url: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740142902/assets/Gallery/Web%20Dev%20With%20Vaibhav/gggfeqywizeefqgr8mnc.jpg',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white pt-16">
      {/* ACM Inaugural Event Section */}
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
              Web Dev With Vaibhav
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              18th Feb 2025 | SOT Auditorium
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
              Join us for the ACM event on Web Development with Vaibhav, a
              hands-on workshop that will introduce you to the basics of web development using AI and help you build your first website.
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
              src={"https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141040/assets/Gallery/Web%20Dev%20With%20Vaibhav/r8k4yqftrwfyg5poeekd.jpg"}
              className="rounded-lg max-w-full transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content Section */}
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
                    This workshop focused on integrating artificial intelligence into web development. It
                    featured an introductory presentation, live demonstrations of innovative AI-driven web
                    tools (v0.dev by Vercel, bolt.new, and lovable), and an interactive mini competition
                    where participants had the opportunity to showcase their skills. The session aimed to
                    provide practical insights into building smarter, more efficient websites while fostering an
                    engaging and hands-on learning environment.
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
                    <p>18th Feb , 2025</p>
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
                    <p>SOT Auditorium, GSFC University, Vadodara</p>
                  </motion.div>
                  
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Speakers
                </h2>
                <div className="mt-6 space-y-8">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div>
                      <h3 className="text-lg font-semibold">Vaibhav Kumawat</h3>
                      <p className="text-gray-400">
                        Tech Lead & Webmaster
                      </p>
                      <p className="text-justify text-gray-400">
                      Vaibhav Kumawat is a passionate developer and a 6th Semester B.Tech CSE student
                      specializing in AI/ML, currently serving as the Webmaster and Tech Lead at the ACM
                      Student Chapter. He has been instrumental in building and contributing to innovative
                      projects such as Ario, Social AI, the GSFCU ACM Website, and DevConnect, which
                      showcase his expertise in software development, web technologies, and AI integration.
                      Recognized for his commitment to developing cutting-edge, AI-powered solutions that
                      enhance web functionality, Vaibhav brings both technical prowess and creative insight to
                      every project. His extensive experience and leadership are evident in his role, where he
                      guides participants through practical, hands-on exercises, real-world case studies, and
                      challenging problem-solving sessions during workshops.

                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
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


export default Inaugral;
