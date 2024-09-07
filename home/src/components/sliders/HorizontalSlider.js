import React, { useEffect, useState } from 'react';
import image1 from "../../assets/home/quote.png";
import image2 from "../../assets/home/image 50.png"

export default function HorizontalSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,
    image2
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-slider">
      <div
        className="h-slider-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="h-slide">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
