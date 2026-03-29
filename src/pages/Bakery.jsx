function Bakery() {
  return (
    <div className="section">
         <a
  href="https://wa.me/27731538557"
  className="whatsapp-button"
  target="_blank"
>
  Order on WhatsApp
</a>
      <h2>Bee's Bakery</h2>

      <ul className="cake-list">
        <li>Lamingtons (Beer Box) - R380</li>
        <li>Scones (Dozen) - R80</li>
        <li>   (Beer Box) - R300</li>
         <li>Carrot cake(Beer Box) - R360</li>
          <li>Biscuits (2 Litre) - R180</li>
          <li>  (5 Litre) - R350</li>
          <li>Muffins (24 muffins) - R160</li>
          <li>    (Beer Box) - R350</li>
      </ul>

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