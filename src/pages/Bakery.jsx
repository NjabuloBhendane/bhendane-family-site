function Bakery() {
  return (
    <div className="section bakery-section">

      <div className="bakery-header">

        <a
          href="https://wa.me/27731538557"
          className="whatsapp-button"
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>

        <h2>Bee's Bakery</h2>

        <p className="bakery-description">
          Freshly baked treats crafted with warmth, creativity, and comfort.
          From muffins and biscuits to lamingtons and cakes, Bee’s Bakery
          creates delicious homemade baked goods perfect for every occasion.
        </p>

      </div>

      <div className="cake-menu">

        <div className="cake-item">
          <span>Lamingtons (Beer Box)</span>
          <span>R380</span>
        </div>

        <div className="cake-item">
          <span>Scones (Dozen)</span>
          <span>R80</span>
        </div>

        <div className="cake-item">
          <span>Carrot Cake (Beer Box)</span>
          <span>R360</span>
        </div>

        <div className="cake-item">
          <span>Biscuits (2 Litre)</span>
          <span>R180</span>
        </div>

        <div className="cake-item">
          <span>Biscuits (5 Litre)</span>
          <span>R350</span>
        </div>

        <div className="cake-item">
          <span>Muffins (24 Muffins)</span>
          <span>R160</span>
        </div>

        <div className="cake-item">
          <span>Muffins (Beer Box)</span>
          <span>R350</span>
        </div>

      </div>

      <p className="notice">
        *We require 2 business days from order to delivery.*
      </p>

      <div className="image-grid">
        <img src="/images/cake1.jpeg" alt="Cake 1" />
        <img src="/images/cake2.jpeg" alt="Cake 2" />
        <img src="/images/cake3.jpeg" alt="Cake 3" />
        <img src="/images/cake4.jpeg" alt="Cake 4" />
        <img src="/images/cake5.jpeg" alt="Cake 5" />
        <img src="/images/cake6.jpeg" alt="Cake 6" />
      </div>

    </div>
  );
}

export default Bakery;