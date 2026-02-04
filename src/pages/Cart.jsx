import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  return (
    <section className="stack">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        {cartItems.length > 0 && (
          <button onClick={clearCart} className="btn btn--ghost btn--small">
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty__content">
            <svg
              className="cart-empty__icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h3>Your cart is empty</h3>
            <p className="text-muted">
              Add some quality gear to get started
            </p>
            <Link to="/shop" className="btn">
              Browse Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__image"
                />
                <div className="cart-item__details">
                  <h3>{item.name}</h3>
                  <p className="text-muted">{item.category}</p>
                  <p className="cart-item__price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item__actions">
                  <div className="quantity-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn--ghost btn--small"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="card">
              <h3>Order Summary</h3>
              <div className="cart-summary__row">
                <span>Subtotal</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="cart-summary__row">
                <span>Shipping</span>
                <span>TBD</span>
              </div>
              <div className="cart-summary__row cart-summary__total">
                <span>Total</span>
                <span className="cart-summary__price">${getTotalPrice().toFixed(2)}</span>
              </div>
              <button className="btn" disabled>
                Proceed to Checkout
              </button>
              <p className="text-muted cart-summary__note">
                Payment processing will be integrated with Stripe/POS
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
