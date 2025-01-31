import React from 'react';
import { motion } from 'framer-motion';

const Officer = () => {
  return (
    <div>
      <motion.section
        id="officers-intro"
        className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-gray-900 to-indigo-950"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div
              className="inline-block rounded-lg bg-acm-blue px-3 py-1 text-sm text-white"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              
            </motion.div>
            <motion.h2
              className="text-3xl text-blue-700 font-bold tracking-tighter sm:text-5xl mt-4"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Leaders
            </motion.h2>
            <motion.p
              className="max-w-[900px] mx-auto text-gray-600 md:text-xl lg:text-base xl:text-xl dark:text-gray-400 mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Get to know the esteemed leaders who are guiding our institution towards excellence.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap items-start justify-center gap-12 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774282/president_sir_cgldyw.jpg'}
                alt="president"
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
              <h3 className="text-white text-xl font-bold mt-4 sm:text-2xl md:text-3xl">Shri P. K. Taneja</h3>
              <h4 className="text-white text-lg font-medium sm:text-xl md:text-2xl">IAS (Retd.)</h4>
              <h5 className="text-white text-md font-medium sm:text-lg md:text-xl">President - GSFC University</h5>
            </motion.div>
            <motion.div className="max-w-lg text-justify">
              <h3 className="text-sky-700 text-2xl font-bold mb-4 sm:text-3xl md:text-4xl">About</h3>
              <p className="text-white">
              Mr. P.K. Taneja, the President of GSFC University, has held various key positions in government and public sector undertakings, such as Gujarat Alkalies and Chemicals Limited, Gujarat State Fertilizers & Chemicals Ltd, Sardar Sarovar Narmada Nigam Ltd, and Gujarat State Electricity Corporation Ltd. Mr. Taneja is an excellent administrator and an exceptional leader, known for his astute leadership skills and unwavering commitment to public service. Under his visionary guidance, our university has achieved remarkable milestones and continues to strive for academic excellence and societal impact. With a deep passion for education and innovation, 
              Mr. Taneja inspires and motivates the entire university community to reach new heights of success and contribute meaningfully to the betterment of society.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="Provost"
        className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-t from-gray-900 to-indigo-950"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-start justify-center gap-12">
            <motion.div
              className="flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774282/provost_nciag8.png'}
                alt="provost"
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
              <h3 className="text-white text-xl font-bold mt-4 sm:text-2xl md:text-3xl">Dr. G. R Sinha</h3>
              <h5 className="text-white text-lg font-medium sm:text-xl md:text-2xl">Provost - GSFC University</h5>
            </motion.div>
            <motion.div className="max-w-lg text-justify">
              <h3 className="text-sky-700 text-2xl font-bold mb-4 sm:text-3xl md:text-4xl">About</h3>
              <p className="text-gray-300">
                Prof. G. R Sinha (PhD, Fellow IETE, Fellow IEI, SMACM, SMIEEE) is Vice Chancellor of GSFC University Vadodara, Gujarat, India. Prior to this, he was Professor at International Institute of Information Technology Bangalore (IIITB). He served as Professor at Myanmar Institute of Information Technology (MIIT) on deputation in a friendship project between Government of India and Government of Republic of Myanmar. He has published 323 research papers, book chapters, and books at International and National levels. He has teaching and research experience of 26 years. He is recipient of many Awards and recognitions: ACM Senior Member Award 2023, Mentor in IEEE India Council 2023, Distinguished Alumnus Award 2022 NIT Raipur. He has delivered more than 75 Keynote/Invited Talks and Chaired many Technical Sessions in International Conferences across the world. Our Provost / Vice Chancellor- DR. G.R.Sinha has been the Senior ACM and also has been the ACM Distinguished Speaker from 2017 to 2021. He has been actively involved in a number of ACM activities and conferences for many years. He was an Executive Committee Member of ACM Chapter Hyderabad.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Officer;
