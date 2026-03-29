function Bakery() {
  return (
    <div className="section">
      <h2>B's Bakery</h2>

      <ul className="cake-list">
        <li>Vanilla Cake (6 inch) - R350</li>
        <li>Chocolate Cake (8 inch) - R450</li>
        <li>Red Velvet (10 inch) - R650</li>
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