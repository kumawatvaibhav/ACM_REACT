import React from "react";
import { useState, useEffect } from "react";
import { Github, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

import teamMembers from "../lib/member";

export default function TeamSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3); // Default to 3 for larger screens

  // Set number of cards to display based on screen width
  const updateCardsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setCardsToShow(1); // Mobile
    } else if (width < 1024) {
      setCardsToShow(2); // Tablet
    } else {
      setCardsToShow(3); // Desktop
    }
  };

  // Update on resize
  useEffect(() => {
    updateCardsToShow(); // Initial check
    window.addEventListener("resize", updateCardsToShow); // Re-check on resize
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-2 rounded-3xl bg-gradient-to-r from-cyan-400 animate-gradient-x">
      <Card className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-4xl shadow-2xl">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our <span className="text-teal-400">TEAM</span>
        </motion.h1>
        <div className="relative">
          <Button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-black z-10 rounded-full p-2 hover:bg-teal-300 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex justify-center items-center gap-4 overflow-hidden">
            {teamMembers
              .slice(startIndex, startIndex + cardsToShow)
              .map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group w-56 h-72 rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-xl font-semibold">
                      {member.name}
                    </h2>
                    <p className="text-teal-400">{member.role}</p>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-400 transition-colors duration-300"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="w-8 h-8" />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-teal-400 transition-colors duration-300"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-8 h-8" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
          <Button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-400 text-black z-10 rounded-full p-2 hover:bg-teal-300 transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
