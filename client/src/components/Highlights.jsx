import React from "react";
import { Carousel, Card } from "./Corousal"; // Assuming your Carousel and Card components are in the same folder

// Create an array of dummy videos
const generateDummyVideos = () => {
  const categories = ["Match-1", "Match-2", "Match-3", "Match-4", "Match-5"];
  const titles = ["MI VS CSK", "RCB VS DC", "SRH VS KKR", "PK VS LSG", "GT VS RR"];
  
  // Dummy video URLs (replace with actual URLs or local files if needed)
  const videoUrls = [
    "/Sample-1.mp4",
    "/Sample.mp4",
    "/Sample-1.mp4",
    "/Sample.mp4",
    "/Sample-1.mp4",
  ];

  return Array.from({ length: 10 }).map((_, index) => ({
    category: categories[Math.floor(Math.random() * categories.length)],
    title: titles[Math.floor(Math.random() * titles.length)],
    content: "This is some sample content for the card.",
    video: videoUrls[Math.floor(Math.random() * videoUrls.length)], // Randomly assign a video URL
  }));
};

const Highlights = () => {
  const items = generateDummyVideos(); // Using videos instead of images

  return (
    <div className="w-full">
      <Carousel
        items={items.map((card, index) => (
          <Card key={index} card={card} index={index} />
        ))}
        initialScroll={0}
      />
    </div>
  );
};

export default Highlights;
