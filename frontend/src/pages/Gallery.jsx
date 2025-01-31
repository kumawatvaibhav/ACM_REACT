import { ImageGallery } from "react-image-grid-gallery";

import React from "react";

// Images for the gallery
// for Inaugural:


const imagesArray = [
  {
    alt: "Image1's alt text",
    caption: "Inaugural Event",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774262/event_image1_ms1qiu.jpg',
  },
  {
    alt: "Image2's alt text",
    caption: "CodeWars ",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774274/Codewars_5_udvaht.jpg',
  },
  {
    alt: "Image3's alt text",
    caption: "Inaugural Ceremory",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774254/event_image2_k89ril.jpg',
  },
  {
    alt: "Image4's alt text",
    caption: "Expert Talk by Dr. Rutvi shah",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774268/event_image5_iyzyh7.jpg',
  },
  {
    alt: "Image5's alt text", 
    caption: "Inaugural Event",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774255/event_image3_ay9c35.jpg',
  },
  {
    alt: "Image6's alt text",
    caption: "Prof. PK",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774262/event_image6_hbi3kb.jpg',
  },
  {
    alt: "Image7's alt text",
    caption: "Inaugural Event",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774263/event_image4_ywvqte.jpg',
  },
  {
    alt: "Image8's alt text",
    caption: "CodeWars ",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_3_lj5gfo.jpg',
  },
  {
    alt: "Image9's alt text",
    caption: "Codewars Leaderboard",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_4_yddtrn.jpg',
  },
  {
    alt: "Image10's alt text",
    caption: "CodeWars ",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774269/Codewars_1_pk1ikd.jpg',
  },
  {
    alt: "Image11's alt text",
    caption: "Expert Talk by Prof. PK",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774261/event_image10_xjsl0p.jpg',
  },
  {
    alt: "Image12's alt text",
    caption: "CodeWars Round 2",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_2_wantsu.jpg',
  },
  {
    alt: "Image13's alt text",
    caption: "CodeWars Winner",
    src: 'https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774279/Winner1_klr68r.jpg',
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
