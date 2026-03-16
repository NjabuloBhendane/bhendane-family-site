import { useState } from "react";

const businesses = [
  {
    name: "13th Sage",
    description: "Private dining with curated music."
  },
  {
    name: "B's Bakery",
    description: "Custom cakes for every occasion."
  },
  {
    name: "Comfy Food",
    description: "Catering & daily food services."
  }
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % businesses.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + businesses.length) % businesses.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>⬅</button>

      <div className="carousel-content">
        <h3>{businesses[index].name}</h3>
        <p>{businesses[index].description}</p>
      </div>

      <button onClick={nextSlide}>➡</button>
    </div>
  );
}

export default Carousel;