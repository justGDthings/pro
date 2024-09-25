import React, { useState } from "react";

// A BlurImage component that adds a blur effect until the image is fully loaded
const BlurImage = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {/* Blur background div for the loading state */}
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-300 animate-pulse ${className} blur-md`} />
      )}
      {/* Image with loading handler */}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`transition-all duration-500 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
      />
    </div>
  );
};

export default BlurImage;
