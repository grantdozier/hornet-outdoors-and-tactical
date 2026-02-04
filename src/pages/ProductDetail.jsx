import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/inventory';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Find the product by slug
  const product = products.find((p) => p.slug === slug);

  // If product not found, show error
  if (!product) {
    return (
      <section className="stack">
        <h2>Product Not Found</h2>
        <p className="text-muted">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/shop" className="btn">
          Back to Shop
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);

    // Reset the feedback after 2 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <section className="stack">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="breadcrumb__separator">›</span>
        <Link to="/shop">Shop</Link>
        <span className="breadcrumb__separator">›</span>
        <Link to={`/shop/${product.category.toLowerCase()}`}>{product.category}</Link>
        <span className="breadcrumb__separator">›</span>
        <span className="breadcrumb__current">{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="product-detail">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail__info">
          <div className="product-detail__header">
            <h1>{product.name}</h1>
            <span className="badge badge--available">{product.category}</span>
          </div>

          <div className="product-detail__price">
            ${product.price.toFixed(2)}
          </div>

          <div className="product-detail__description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {product.inStock ? (
            <div className="product-detail__actions">
              <div className="quantity-control quantity-control--large">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="quantity-btn"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="quantity-btn"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <div className="product-detail__buttons">
                <button
                  onClick={handleAddToCart}
                  className={`btn ${addedToCart ? 'btn--success' : ''}`}
                >
                  {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                </button>
                <button onClick={handleBuyNow} className="btn btn--ghost">
                  Buy Now
                </button>
              </div>
            </div>
          ) : (
            <div className="product-detail__out-of-stock">
              <p className="text-muted">Currently out of stock</p>
            </div>
          )}

          <div className="product-detail__meta">
            <div className="product-detail__meta-item">
              <strong>Product ID:</strong> {product.id}
            </div>
            <div className="product-detail__meta-item">
              <strong>Category:</strong> {product.category}
            </div>
            <div className="product-detail__meta-item">
              <strong>Availability:</strong>{' '}
              <span className={product.inStock ? 'text-success' : 'text-muted'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Category */}
      <Link to={`/shop/${product.category.toLowerCase()}`} className="btn btn--ghost">
        ← Back to {product.category}
      </Link>
    </section>
  );
}
