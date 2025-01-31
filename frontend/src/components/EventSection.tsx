import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

// Event data
const events = [
  {
    title: "Inaugural",
    description: "The upcoming event promises to expand your horizons in the transformative fields of Artificial Intelligence and Data Science. Join us for insightful discussions and thought-provoking presentations from two distinguished speakers, each bringing a wealth of knowledge and unique perspective on pressing topics in technology",
    prizePool: "",
    date: "1st August 2024",
    poster: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/inaugral_poster_oeaxau.jpg',
    link: "/event/Inaugural"
  },
  {
    title: "Code Wars",
    description: "Code Wars is a competitive programming event where students can showcase their coding skills, solve challenges, and earn recognition. CodeWars, hosted by ACM Student Chapter at GSFC University, is a team-based competitive programming event. Only teams with 2 or 3 members are eligible to participate in the event",
    prizePool: "₹3000",
    date: "30th September 2024",
    poster: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774286/CodeWars_ACM_ydhqua.jpg',
    link: "/event/Codewars"
  },
  {
    title: "Expert Talk",
    description: "Vladan Devedzic Professor of Computer Science, University of Belgrade, Serbia will be delivering an online talk on Artificial Intelligence: I'll see you on the dark side of the Moon.",
    prizePool: "",
    date: "4th October 2024",
    poster: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/Expert_talk_j2r4nu.png',
    link: "/event/Darkside",
  },
];

export default function EventSection() {
  const [activeEvent, setActiveEvent] = useState(null);
  const navigate = useNavigate();

  const toggleEvent = (index) => {
    setActiveEvent((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLearnMore = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-lg border-2 border-teal-500 shadow-xl">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our <span className="text-teal-400">Events</span>
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 rounded-2xl shadow-lg border-2 border-transparent hover:border-teal-500 transition-all ease-in-out transform hover:scale-105 overflow-hidden w-full sm:w-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => toggleEvent(index)}
            >
              {/* Event Poster */}
              <img
                src={event.poster}
                alt={`${event.title} Poster`}
                className="w-full h-48 object-cover rounded-t-2xl"
              />

              {/* Event Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-white">{event.title}</h2>
                <p className="text-teal-400 text-sm mb-4">{event.date}</p>

                <div
                  className={`transition-all duration-300 ${
                    activeEvent === index ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {event.prizePool && (
                    <p className="text-teal-400 font-semibold">
                      Prize Pool: <span className="font-bold">{event.prizePool}</span>
                    </p>
                  )}
                  {!event.prizePool && (
                    <p className="text-gray-400 italic"></p>
                  )}
                  {activeEvent === index && (
                    <Button
                      className="mt-4 bg-teal-500 text-black px-6 py-2 rounded-md hover:bg-teal-400 transition-all"
                      aria-label={`Learn More about ${event.title}`}
                      onClick={() => handleLearnMore(event.link)}
                    >
                      Learn More
                    </Button>
                  )}
                </div>
                {activeEvent !== index && (
                  <p className="text-gray-400 text-sm italic">Click to learn more...</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

