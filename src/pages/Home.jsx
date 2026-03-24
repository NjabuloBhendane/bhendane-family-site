import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";

const images = [
  "/images/slide1.jpeg",
  "/images/slide2.jpg",
  "/images/slide3.jpeg",
  "/images/Slide4.jpeg",
  "/images/slide5.jpeg",
  
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <section
      className="hero"
      style={{
        backgroundImage: `url(${images[index]})`
      }}
    >
      <div className="hero-content">
        <h2>Welcome to the Bhendane Family</h2>
        <p>Three businesses. One family passion.</p>
      </div>
    </section>
    <Carousel/>
    </div>
  );
}

export default Home;