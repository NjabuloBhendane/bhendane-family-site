function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p>{product.unit}</p>

      <h4>R {product.price}</h4>

      <button
        onClick={() => addToCart(product)}
      >
        Add to Basket
      </button>

    </div>
  );
}

export default ProductCard;