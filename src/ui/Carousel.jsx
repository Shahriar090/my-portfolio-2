import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({
  children,
  autoPlayInterval = 3000,
  carouselHeight = "70vh",
  prevLevel,
  nextLevel,
  transitionDuration = 500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % React.Children.count(children)
    );
  }, [children]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + React.Children.count(children)) %
        React.Children.count(children)
    );
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const childCount = React.Children.count(children);
  if (childCount === 0) {
    console.error("Carousel requires at least one child component.");
    return null; // Prevent rendering an empty carousel
  }

  return (
    <div
      className="relative w-full  mx-auto"
      style={{ height: carouselHeight }}
    >
      {/* Carousel images */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: `transform ${transitionDuration}ms ease-in-out`,
          }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 right-2 space-x-2">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          {prevLevel}
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className=" bg-gray-800 text-white p-2 rounded-full"
        >
          {nextLevel}
        </button>
      </div>
      {/* Dots navigation */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {React.Children.map(children, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

// props validation

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  autoPlayInterval: PropTypes.number,
  carouselHeight: PropTypes.string,
  prevLevel: PropTypes.node,
  nextLevel: PropTypes.node,
  transitionDuration: PropTypes.number,
};

export default Carousel;
