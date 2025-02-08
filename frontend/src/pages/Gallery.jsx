import React, { useState } from "react";
import { ImageGallery } from "react-image-grid-gallery";

const imagesArray = [
  {
    alt: "Image15's alt text",
    caption: "Expert Talk by Prof. Vladan Devedzic",
    category: "Expert Talk",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/jwglypy6ctqflpjbw8y5.jpg",
  },
  {
    alt: "Image3's alt text",
    caption: "Inaugural Ceremory",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774254/event_image2_k89ril.jpg",
  },
  {
    alt: "Image8's alt text",
    caption: "CodeWars",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_3_lj5gfo.jpg",
  },
  {
    alt: "Image19's alt text",
    caption: "Recruit-a-thon",
    category: "Recruit-a-thon",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1738990830/assets/Gallery/%20Recruitment_Drive/jytv4ctfi0vme9bciszr.jpg",
  },
  {
    alt: "Image1's alt text",
    caption: "Inaugural Event",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774262/event_image1_ms1qiu.jpg",
  },
  {
    alt: "Image13's alt text",
    caption: "CodeWars Winner",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774279/Winner1_klr68r.jpg",
  },
  {
    alt: "Image17's alt text",
    caption: "Recruit-a-thon",
    category: "Recruit-a-thon",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1738990828/assets/Gallery/%20Recruitment_Drive/bggl14vqldxmb7q2cpm3.jpg",
  },
  {
    alt: "Image5's alt text",
    caption: "Inaugural Event",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774255/event_image3_ay9c35.jpg",
  },
  {
    alt: "Image20's alt text",
    caption: "Recruit-a-thon",
    category: "Recruit-a-thon",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1738990829/assets/Gallery/%20Recruitment_Drive/ov7zbza3bxitmygiycrz.jpg",
  },
  {
    alt: "Image6's alt text",
    caption: "Prof. PK",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774262/event_image6_hbi3kb.jpg",
  },
  {
    alt: "Image2's alt text",
    caption: "CodeWars",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774274/Codewars_5_udvaht.jpg",
  },
  {
    alt: "Image9's alt text",
    caption: "Codewars Leaderboard",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_4_yddtrn.jpg",
  },
  {
    alt: "Image12's alt text",
    caption: "CodeWars Round 2",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774272/Codewars_2_wantsu.jpg",
  },
  {
    alt: "Image18's alt text",
    caption: "Recruit-a-thon",
    category: "Recruit-a-thon",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1738990827/assets/Gallery/%20Recruitment_Drive/m1rgvi1s7ywexfd5by5g.jpg",
  },
  {
    alt: "Image14's alt text",
    caption: "Expert Talk by Prof. Vladan Devedzic",
    category: "Expert Talk",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/ztiaz6cfr9qcgunqjjsu.jpg",
  },
  {
    alt: "Image4's alt text",
    caption: "Expert Talk by Dr. Rutvi shah",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774268/event_image5_iyzyh7.jpg",
  },
  {
    alt: "Image7's alt text",
    caption: "Inaugural Event",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774263/event_image4_ywvqte.jpg",
  },
  {
    alt: "Image16's alt text",
    caption: "Expert Talk by Prof. Vladan Devedzic",
    category: "Expert Talk",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1735449859/assets/Gallery/Expert%20Talk%20:%20Darkside/czi5gv7y55uabkyjyzwj.jpg",
  },
  {
    alt: "Image11's alt text",
    caption: "Expert Talk by Prof. PK",
    category: "Inaugural",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774261/event_image10_xjsl0p.jpg",
  },
  {
    alt: "Image10's alt text",
    caption: "CodeWars",
    category: "CodeWars",
    src: "https://res.cloudinary.com/ddpmw1pgg/image/upload/v1734774269/Codewars_1_pk1ikd.jpg",
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(imagesArray.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "All"
      ? imagesArray
      : imagesArray.filter((img) => img.category === selectedCategory);

  return (
    <section className="py-12 bg-gradient-to-r from-gray-800 to-black">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-blue-500 text-5xl font-serif mt-10 mb-10">Gallery</h1>
        {/* Category buttons */}
        <div className="mb-6 flex flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`mx-2 mb-2 px-4 py-2 rounded-full transition-colors duration-300 
                ${selectedCategory === category 
                  ? "bg-blue-500 text-white" 
                  : "bg-white text-blue-500 hover:bg-blue-100"}`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Image Gallery */}
        <div>
          <ImageGallery
            imagesInfoArray={filteredImages}
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
