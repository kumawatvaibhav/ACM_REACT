"use client";
import { ImageGallery } from "react-image-grid-gallery";

import React from "react";
import { motion } from "framer-motion";

// Images for the gallery
// for Inaugural:
import Image1 from "../assets/Gallery/ACM_Inaugral/event_image1.jpeg";
import Image2 from "../assets/Gallery/ACM_Inaugral/event_image2.jpeg";
import Image3 from "../assets/Gallery/ACM_Inaugral/event_image3.jpeg";
import Image4 from "../assets/Gallery/ACM_Inaugral/event_image4.jpeg";
import Image5 from "../assets/Gallery/ACM_Inaugral/event_image5.jpeg";
import Image6 from "../assets/Gallery/ACM_Inaugral/event_image6.jpeg";
import Image14 from "../assets/Gallery/ACM_Inaugral/event_image7.jpeg";

// for CodeWars:
import Image9 from "../assets/Gallery/CodeWars/Codewars_1.jpg";
import Image11 from "../assets/Gallery/CodeWars/Codewars_2.jpg";
import Image7 from "../assets/Gallery/CodeWars/Codewars_3.jpg";
import Image8 from "../assets/Gallery/CodeWars/Codewars_4.jpg";
import Image10 from "../assets/Gallery/CodeWars/Codewars_5.jpg";
import Image12 from "../assets/Gallery/CodeWars/Codewars_6.jpg";
import Image13 from "../assets/Gallery/CodeWars/Winner1.jpg"

const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Inaugral Event",
    src: Image1,
  },
  {
    alt: "Image2's alt text",
    caption: "CodeWars ",
    src: Image10,
  },
  {
    alt: "Image3's alt text",
    caption: "Inaugral Ceremory",
    src: Image2,
  },
  {
    alt: "Image4's alt text",
    caption: "Expert Talk by Dr. Rutvi shah",
    src: Image5,
  },
  {
    alt: "Image5's alt text", 
    caption: "Inaugral Event",
    src: Image3,
  },
  {
    alt: "Image6's alt text",
    caption: "Prof. PK",
    src: Image6,
  },
  {
    alt: "Image7's alt text",
    caption: "Inaugral Event",
    src: Image4,
  },
  {
    alt: "Image8's alt text",
    caption: "CodeWars ",
    src: Image7,
  },
  {
    alt: "Image9's alt text",
    caption: "Codewars Leaderboard",
    src: Image8,
  },
  {
    alt: "Image10's alt text",
    caption: "CodeWars ",
    src: Image9,
  },
  {
    alt: "Image11's alt text",
    caption: "Expert Talk by Prof. PK",
    src: Image14,
  },
  {
    alt: "Image12's alt text",
    caption: "CodeWars Round 1 end",
    src: Image11,
  },
  {
    alt: "Image13's alt text",
    caption: "CodeWars Winner",
    src: Image13,
  }
];

const Gallery = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-blue-500 text-5xl font-serif mt-10 mb-10">Gallery</h1>
        <div className="">
        <ImageGallery
          imagesInfoArray={imagesArray}
          columnCount={3}
          columnWidth={325}
          gapSize={20}
        />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
