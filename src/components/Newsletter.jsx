import { useState } from 'react';

export default function Newsletter({ title = "Stay Updated", description = "Sign up for our newsletter to receive updates on new products and promotions." }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a backend service
    console.log('Newsletter signup:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="newsletter">
      <h3>{title}</h3>
      <p>{description}</p>
      
      {submitted ? (
        <div className="newsletter__success fade-in">
          <p>Thanks for subscribing! We'll keep you posted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="newsletter__input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn">Subscribe</button>
          </div>
        </form>
      )}
    </div>
  );
}
