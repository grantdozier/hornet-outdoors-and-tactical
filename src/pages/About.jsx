import { Link } from 'react-router-dom';
import heroImage from '../img/LouisianaBayouMilitia.jpg';

export default function About() {
  const instagramHandle = 'hornetoutdoors_tactical';
  const instagramUrl = 'https://www.instagram.com/hornetoutdoors_tactical?igsh=MXh2aG8xN2VnZWJmeA==';

  // Instagram posts - Add your actual Instagram post URLs here
  // To get the image URL: Right-click on an Instagram post image → "Copy image address"
  // Or use the Instagram post URL directly
  const instagramPosts = [
    {
      id: 1,
      imageUrl: '', // Add your Instagram image URL here
      postUrl: '', // Add the Instagram post URL here
      alt: 'Instagram post 1'
    },
    {
      id: 2,
      imageUrl: '',
      postUrl: '',
      alt: 'Instagram post 2'
    },
    {
      id: 3,
      imageUrl: '',
      postUrl: '',
      alt: 'Instagram post 3'
    },
    {
      id: 4,
      imageUrl: '',
      postUrl: '',
      alt: 'Instagram post 4'
    },
    {
      id: 5,
      imageUrl: '',
      postUrl: '',
      alt: 'Instagram post 5'
    },
    {
      id: 6,
      imageUrl: '',
      postUrl: '',
      alt: 'Instagram post 6'
    },
  ];

  // Filter out posts without images
  const validPosts = instagramPosts.filter(post => post.imageUrl);

  return (
    <section className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero__content">
          <div className="badge badge--available">Our Story</div>
          <h1>Built on Experience. Driven by Passion.</h1>
          <p className="about-hero__subtitle">
            Founded by a former Marine Corps Officer and Naval Aviator, Hornet Outdoors & Tactical
            brings military precision and outdoor expertise to every product we offer.
          </p>
        </div>
        <div className="about-hero__image">
          <img src={heroImage} alt="Louisiana Bayou" />
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section">
        <div className="about-intro">
          <h2>Mission-Ready Gear for Outdoor Enthusiasts</h2>
          <p>
            At Hornet Outdoors & Tactical, we're more than just a gear supplier – we're a community
            of outdoor enthusiasts dedicated to helping you make the most of your adventures. With
            decades of military experience and a lifelong love of the outdoors, we understand what
            it takes to succeed in demanding environments.
          </p>
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          <div className="value-card">
            <div className="value-card__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3>Integrity</h3>
            <p>
              Built on a foundation of military values and unwavering commitment to quality and
              honesty in everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3>Expertise</h3>
            <p>
              Decades of military service and outdoor experience inform every product selection and
              recommendation we make.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3>Passion</h3>
            <p>
              We live and breathe the outdoor lifestyle, bringing genuine enthusiasm to serving
              fellow adventurers.
            </p>
          </div>

          <div className="value-card">
            <div className="value-card__icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3>Community</h3>
            <p>
              We're building a community of outdoor enthusiasts who share knowledge, stories, and a
              love for adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="founder-section">
        <div className="founder-content">
          <div className="badge badge--available">Leadership</div>
          <h2>Aviator-Owned & Field-Tested</h2>
          <p>
            Founded by a Marine Corps Officer and Naval Aviator with decades of military service,
            Hornet Outdoors & Tactical was born from a deep understanding of what it takes to
            perform under pressure. Our founder's unique perspective – combining military precision
            with outdoor passion – ensures that every product meets the highest standards of
            reliability and performance.
          </p>
          <p>
            Whether you're preparing for a hunting expedition, camping under the stars, or engaging
            in tactical operations, you can trust that our selections have been vetted with the same
            rigor applied in military operations.
          </p>
          <div className="founder-stats">
            <div className="stat">
              <div className="stat__number">20+</div>
              <div className="stat__label">Years Military Service</div>
            </div>
            <div className="stat">
              <div className="stat__number">100%</div>
              <div className="stat__label">Veteran Owned</div>
            </div>
            <div className="stat">
              <div className="stat__number">1000+</div>
              <div className="stat__label">Products Tested</div>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="instagram-section-full">
        <div className="instagram-header-full">
          <div className="instagram-icon-large">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <h2>Follow Our Adventures</h2>
          <p className="text-muted">
            Join @{instagramHandle} for gear reviews, outdoor tips, and community highlights
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram-large"
          >
            <svg className="btn-instagram-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @{instagramHandle}
          </a>
        </div>

        {/* Instagram Feed Grid - Shows actual posts if URLs are added */}
        {validPosts.length > 0 && (
          <div className="instagram-feed-grid">
            {validPosts.map((post) => (
              <a
                key={post.id}
                href={post.postUrl || instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-post-card"
              >
                <img src={post.imageUrl} alt={post.alt} className="instagram-post-image" />
                <div className="instagram-post-overlay">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>View on Instagram</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="about-cta">
        <h2>Ready to Gear Up?</h2>
        <p>Explore our carefully curated selection of outdoor and tactical equipment</p>
        <div className="about-cta__buttons">
          <Link to="/shop" className="btn">
            Shop Products
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
