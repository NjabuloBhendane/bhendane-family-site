import { useEffect, useState } from "react";

const images = [
  "/images/slide1.jpeg",
  "/images/slide2.jpg",
  "/images/slide3.jpg"
];

function BackgroundSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-slider"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    ></div>
  );
}

export default BackgroundSlider;