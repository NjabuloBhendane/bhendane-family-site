import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to the Bhendane Family Businesses</h2>
        <p>
          We proudly operate:
          13th Sage private dining,
          B's Bakery custom cakes,
          and Comfy Food catering services.
        </p>
      </section>

      <Carousel />
    </div>
  );
}

export default Home;