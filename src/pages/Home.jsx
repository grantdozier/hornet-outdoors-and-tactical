import PlaceholderImage from '../components/PlaceholderImage'
import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import ProductCard from '../components/ProductCard'

export default function Home() {
  // Sample featured products
  const featuredProducts = [
    { title: 'Tactical Backpack', price: '149.99', imageLabel: 'Tactical Backpack', link: '/shop/gear' },
    { title: 'Outdoor Knife', price: '89.99', imageLabel: 'Outdoor Knife', link: '/shop/gear' },
    { title: 'Premium Hat', price: '34.99', imageLabel: 'Premium Hat', link: '/shop/apparel/hats' },
    { title: 'Camping Tent', price: '299.99', imageLabel: 'Camping Tent', link: '/shop/tents-and-camping' }
  ];

  return (
    <section className="stack">
      <div className="grid-2">
        <div className="stack">
          <h2>Welcome to Hornet Outdoors & Tactical</h2>
          <p>
            At Hornet Outdoors & Tactical, we're committed to providing outdoor enthusiasts and tactical professionals with top-quality gear and expert advice to enhance their adventures. Founded by a former Marine Corps Officer and Naval Aviator, our company brings decades of military experience and a lifelong passion for the outdoors to every product we offer.
          </p>
          <p>
            Whether you're embarking on a hunting expedition, camping under the stars, or engaging in tactical operations, we have everything you need to succeed. From durable clothing and reliable equipment to cutting-edge accessories and essential gear, our extensive selection has been carefully curated to meet the demands of any outdoor pursuit.
          </p>

          <div className="cta-row">
            <Link to="/shop" className="btn">Shop Gear</Link>
            <Link to="/about" className="btn btn--ghost">About Us</Link>
          </div>
        </div>
        <PlaceholderImage ratio="4/3" label="Hero / lifestyle image" />
      </div>

      <div className="section-header">
        <h2>Featured Products</h2>
        <Link to="/shop" className="btn btn--ghost">View All</Link>
      </div>
      
      <div className="grid-4">
        {featuredProducts.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            price={product.price}
            imageLabel={product.imageLabel}
            link={product.link}
          />
        ))}
      </div>

      <div className="grid-3">
        <Link to="/shop/tents-and-camping" className="card">
          <PlaceholderImage label="Category: Tents & Camping" />
          <div className="card__body"><h3>Tents & Camping</h3></div>
        </Link>
        <Link to="/shop/gear" className="card">
          <PlaceholderImage label="Category: Gear" />
          <div className="card__body"><h3>Gear</h3></div>
        </Link>
        <Link to="/shop/apparel" className="card">
          <PlaceholderImage label="Category: Apparel" />
          <div className="card__body"><h3>Apparel</h3></div>
        </Link>
      </div>

      <Newsletter 
        title="Join the Hornet Community" 
        description="Sign up for our newsletter to receive updates on new products, exclusive offers, and outdoor tips from our experts."
      />
    </section>
  )
}
