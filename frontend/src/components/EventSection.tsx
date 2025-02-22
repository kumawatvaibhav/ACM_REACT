"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

// Event data
const events = [
  {
    title: "Inaugural",
    description:
      "The upcoming event promises to expand your horizons in the transformative fields of Artificial Intelligence and Data Science. Join us for insightful discussions and thought-provoking presentations from two distinguished speakers, each bringing a wealth of knowledge and unique perspective on pressing topics in technology",
    prizePool: "",
    date: "1st August 2024",
    poster: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/inaugral_poster_oeaxau.jpg",
    link: "/event/Inaugural",
  },
  {
    title: "Code Wars",
    description:
      "Code Wars is a competitive programming event where students can showcase their coding skills, solve challenges, and earn recognition. CodeWars, hosted by ACM Student Chapter at GSFC University, is a team-based competitive programming event. Only teams with 2 or 3 members are eligible to participate in the event",
    prizePool: "₹3000",
    date: "30th September 2024",
    poster: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774286/CodeWars_ACM_ydhqua.jpg",
    link: "/event/Codewars",
  },
  {
    title: "Expert Talk",
    description:
      "Vladan Devedzic Professor of Computer Science, University of Belgrade, Serbia will be delivering an online talk on Artificial Intelligence: I'll see you on the dark side of the Moon.",
    prizePool: "",
    date: "4th October 2024",
    poster: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774287/Expert_talk_j2r4nu.png",
    link: "/event/Darkside",
  },
  {
    title: "Recruit-a-thon",
    description:
      "The primary goal of these recruitment drives is to build a diverse and talented team that can contribute to various aspects of ACM, including content creation, event management,marketing, social media, technical development, and design",
    prizePool: "",
    date: "3th Feb - 7th Feb 2025",
    poster:
      "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1738990828/assets/Gallery/%20Recruitment_Drive/bggl14vqldxmb7q2cpm3.jpg",
    link: "/event/Hire",
  },
  {
    title: "Web Dev With Vaibhav",
    description: "This workshop focused on integrating artificial intelligence into web development. It featured an introductory presentation, live demonstrations of innovative AI-driven web tools (v0.dev by Vercel, bolt.new, and lovable), and an interactive mini competition where participants had the opportunity to showcase their skills.",
    prizePool: "",
    date: "18th Feb 2025",
    poster : "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1740141040/assets/Gallery/Web%20Dev%20With%20Vaibhav/r8k4yqftrwfyg5poeekd.jpg",
    link : "/event/WebDev",
  }
]

export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 bg-gradient-to-t from-cyan-950 to-gray-900 rounded-3xl shadow-lg p-8 border-4 border-cyan-600">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our <span className="text-teal-400">Events</span>
      </motion.h1>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-1/2">
              <Card className="w-full h-full border-2 border-teal-800">
                <CardHeader>
                  <CardTitle>{events[currentIndex].title}</CardTitle>
                  <CardDescription>{events[currentIndex].date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src={events[currentIndex].poster || "/placeholder.svg"}
                    alt={`${events[currentIndex].title} Poster`}
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <p className="text-muted-foreground">{events[currentIndex].description}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  {events[currentIndex].prizePool && (
                    <p className="text-white font-semibold">
                      Prize Pool: <span className="font-bold">{events[currentIndex].prizePool}</span>
                    </p>
                  )}
                  <Button asChild>
                    <a href={events[currentIndex].link}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all ${
                    index === currentIndex ? "border-2 border-teal-800" : "opacity-60 hover:opacity-100"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.date}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

