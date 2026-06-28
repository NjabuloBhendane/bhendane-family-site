import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Market() {

  const addToCart = (product) => {
    console.log(product);
  };

  return (

    <div className="section">

      <h2>Maple Market</h2>

      <p>
        Fresh Produce • Dairy • Pantry • Household Essentials
      </p>

      <div className="products-grid">

        {products.map((product) => (

          <ProductCard

            key={product.id}

            product={product}

            addToCart={addToCart}

          />

        ))}

      </div>

    </div>

  );
}

export default Market;