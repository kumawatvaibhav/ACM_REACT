import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../../components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../../components/ui/Dialog";
import { ExternalLink, Calendar, Clock, MapPin, X } from 'lucide-react';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // These URLs should be replaced with actual Google Form URLs
  const studentFormUrl = "https://forms.gle/jr9ax3H65VghkaTM8";
  const outsiderFormUrl = "https://forms.gle/mDxaJP2UHcA3j1DT7";

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section with floating animations */}
      <motion.header
        className="flex items-center justify-center min-h-[90vh] bg-transparent text-white py-12 md:py-20 lg:py-24 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: Math.random() * 200 + 50,
                height: Math.random() * 200 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: Math.random() * 5 + 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-6 z-10">
          <motion.div
            className="flex flex-col gap-5 md:gap-6 md:w-1/2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              ACM Distinguished Speaker Program
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              April 23, 2025 | SOT Auditorium, GSFCU
            </motion.p>
            <motion.div
              className="mt-5 max-w-[260px] inline-block rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 text-sm font-medium shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
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
            
            {/* Register Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-lg shadow-lg text-lg mt-4"
                onClick={() => setIsDialogOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.img
              width="400"
              height="400"
              alt="poster"
              src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1744181259/assets/poster/rx3ausyqdt1yloqih9uy.png"
              className="rounded-lg max-w-full shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
            />
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content Section */}
      <motion.main
        className="flex-1 bg-gradient-to-b from-gray-800 to-gray-900"
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
                className="bg-gray-800/50 p-6 rounded-xl shadow-xl backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Event Details
                </h2>
                <div className="mt-6 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <h3 className="text-lg font-semibold text-blue-300">Description</h3>
                    <p className="text-gray-300 text-justify">
                      Join Us for an Exclusive ACM Distinguished Speaker Event!
                    </p>
                    <br></br>
                    <p className="text-gray-300 text-justify">
                      We are excited to announce that the ACM GSFCU Student
                      Chapter is hosting its inaugural ACM Distinguished Speaker
                      Program in Vadodara. Dr. Eugenio Cesario, Associate
                      Professor of Computer Engineering at the University of
                      Calabria, Italy, will deliver a talk on "A Machine
                      Learning Approach to Forecast Crimes in Multi-Density
                      Crime Hotspots."​
                    </p>
                    <br></br>
                    <p className="text-gray-300 text-justify">
                      Dr. Cesario's research encompasses Data Analytics, Urban
                      Computing, and Crime Data Mining. This session will
                      provide valuable insights into applying machine learning
                      techniques for crime prediction in urban areas, making it
                      particularly beneficial for those interested in AI, ML,
                      and Cybersecurity.
                    </p>

                    <h3 className="text-lg text-blue-300 font-semibold mt-6">
                      About the Event
                    </h3>
                  </motion.div>
                  
                  <motion.div
                    className="mt-6 flex items-center gap-4 p-3 bg-blue-900/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Calendar className="h-6 w-6 text-blue-400" />
                    <p className="font-medium">April 23, 2025​</p>
                  </motion.div>
                  
                  <motion.div
                    className="mt-2 flex items-center gap-4 p-3 bg-blue-900/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Clock className="h-6 w-6 text-blue-400" />
                    <p className="font-medium">10:30 AM – 11:30 AM​</p>
                  </motion.div>
                  
                  <motion.div
                    className="mt-2 flex items-center gap-4 p-3 bg-blue-900/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <MapPin className="h-6 w-6 text-blue-400" />
                    <p className="font-medium">SOT Auditorium, GSFC University, Vadodara​</p>
                  </motion.div>
                  
                  {/* Registration Button for Mobile View */}
                  <motion.div 
                    className="mt-6 md:hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 rounded-lg shadow-lg"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      Register Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="bg-gray-800/50 p-6 rounded-xl shadow-xl backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Speaker
                </h2>
                <div className="mt-6 space-y-6">
                  <motion.div
                    className="flex flex-col md:flex-row items-center md:items-start gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full  blur-md opacity-70"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      />
                      <span className="relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 shadow-lg">
                        <motion.img
                          className="aspect-square h-full w-full object-cover"
                          src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1743057966/assets/speakers/uwxi7xjgruqvrgegv8io.jpg"
                          alt="Dr. Eugenio Cesario"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1 }}
                        />
                      </span>
                    </motion.div>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-semibold text-blue-300">Dr. Eugenio Cesario</h3>
                      <p className="text-gray-400 mb-4">Associate Professor at the University of Calabria, Italy.</p>
                      <p className="text-justify text-gray-300">
                        Eugenio Cesario is an Associate Professor of Computer
                        Engineering at University of Calabria (Italy). His
                        research interests fall in the broad areas of Data
                        Analytics and Parallel/Distributed Data Mining, and
                        include Urban Computing, Crime Data Mining, Knowledge
                        Discovery applications for Smart Cities, Mobility Data
                        Mining for Smart Transportation, Energy-aware Cloud
                        Computing, Cloud-Grid services architectures. He
                        co-authored over seventy scientific papers in
                        international journals, conference proceedings, and
                        edited volumes. He received two best paper awards and a
                        best paper nomination in three international
                        conferences. He has been serving as a chair, organizer,
                        panelist and program committee member of several
                        international conferences.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.main>

      {/* Registration Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-white border-blue-700">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-blue-300">Event Registration</DialogTitle>
            <DialogDescription className="text-center text-gray-300">
              Select your registration category
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6">
            <div className="flex justify-center p-2">
              <motion.img
                width="200"
                height="200"
                alt="event poster"
                src="https://res.cloudinary.com/ddpmw1pgg/image/upload/v1744181259/assets/poster/rx3ausyqdt1yloqih9uy.png"
                className="rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="text-center px-2">
              <p className="text-sm text-gray-300">
                Join Dr. Eugenio Cesario for an insightful discussion on "A Machine
                Learning Approach to Forecast Crimes in Multi-Density Crime Hotspots."
              </p>

              <h6 className="text-sm font-semibold text-blue-300 mt-4">Note: GSFCU students are requested to open this link using their college email ID.</h6>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <motion.a
                href={studentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-4 rounded-lg font-medium shadow-lg text-white"
                whileHover={{ scale: 1.03, backgroundColor: "#2563EB" }}
                whileTap={{ scale: 0.97 }}
              >
                GSFCU Students <ExternalLink className="h-4 w-4 ml-1" />
              </motion.a>
              
              <motion.a
                href={outsiderFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 py-3 px-4 rounded-lg font-medium shadow-lg text-white"
                whileHover={{ scale: 1.03, backgroundColor: "#7C3AED" }}
                whileTap={{ scale: 0.97 }}
              >
                For Others <ExternalLink className="h-4 w-4 ml-1" />
              </motion.a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
