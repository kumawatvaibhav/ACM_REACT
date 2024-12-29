import { Card } from "./ui/Card";
import { Sparkles } from "lucide-react";
import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full max-w-5xl mx-auto p-1 rounded-3xl bg-gradient-to-r from-cyan-400 animate-gradient-x">
      <Card className="w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-3xl">
        <div className="space-y-8">
          {/* About ACM Section */}
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              About ACM
            </h2>
            <Sparkles className="w-8 h-8 text-green-400" />
          </div>

          <p className="text-gray-300 text-justify leading-relaxed">
          The Association for Computing Machinery (ACM) is the world's largest educational and scientific computing society, delivering resources 
          that advance computing as a science and a profession. Our student chapter is dedicated to fostering a vibrant community of computer science 
          enthusiasts. GSFC University ACM Student Chapter was established in May, 2024 under the aegis of Department of Computer Science and Engineering, 
          GSFC University. The chapter aims at serving as a dynamic hub of activities for the computing fraternity of the University, where enthusiasts meet, interact and learn from each other.
          The chapter aims to organize various events which includes hackathons, technical workshops, talks by renowned speakers, and coding competitions.
          </p>

          {/* About GSFCU Section (Styled same as About ACM) */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                About GSFCU
              </h2>
            </div>

            <p className="text-gray-300 text-justify leading-relaxed">
              GSFC University is recognized under the Gujarat Private University (Second Amendment) Act, 2014 and is established 
              by the GSFC Education Society - an initiative of Gujarat State Fertilizers and Chemicals Ltd, Over six decades old industrial giant, 
              to continue the tradition of serving the community in multiple ways. GSFC University follows 'बुद्धि ज्ञानेन शुद्धधयती' principle as 
              fundamental core of the University. The vision behind establishing this distinct University is societal development through 
              relevant and cutting edge knowledge in frontier areas of professional growth.
            </p>
          </div>

          {/* Grid Layout for Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-teal-400">Our Vision</h4>
              <p className="text-gray-300">
                To create a collaborative environment that fosters innovation and excellence in computing.
                We envision a future where technology drives societal change, empowering individuals and communities alike.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-teal-400">Our Mission</h4>
              <p className="text-gray-300">
                To inspire and empower the next generation of computer scientists and technologists.
                Our mission is to bridge the gap between academia and industry, fostering leaders who will innovate responsibly and inclusively.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
