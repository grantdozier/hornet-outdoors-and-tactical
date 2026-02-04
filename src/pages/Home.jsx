import { Link } from 'react-router-dom'
import Newsletter from '../components/Newsletter'
import ProductCard from '../components/ProductCard'
import logoImage from '../img/hornet_outdoors_and_tactical_logo.PNG'
import { products, categories } from '../data/inventory'

export default function Home() {

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
        <div className="logo-container">
          <img
            src={logoImage}
            alt="Hornet Outdoors & Tactical Logo"
            className="logo-image"
          />
        </div>
      </div>

      {products.length > 0 && (
        <>
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/shop" className="btn btn--ghost">View All</Link>
          </div>

          <div className="grid-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price.toFixed(2)}
                imageSrc={product.image}
                link={`/shop/${product.category.toLowerCase()}/${product.slug}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="section-header">
        <h2>Shop by Category</h2>
      </div>

      <div className="grid-3">
        {categories.map((category) => (
          <Link key={category.id} to={`/shop/${category.slug}`} className="card category-card">
            <div className="card__body">
              <h3>{category.name}</h3>
              <p className="category-card__status">
                {category.comingSoon ? (
                  <span className="badge badge--coming-soon">Coming {category.availableDate}</span>
                ) : (
                  <span className="badge badge--available">{category.itemCount} {category.itemCount === 1 ? 'item' : 'items'}</span>
                )}
              </p>
              <p className="text-muted">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <Newsletter 
        title="Join the Hornet Community" 
        description="Sign up for our newsletter to receive updates on new products, exclusive offers, and outdoor tips from our experts."
      />
    </section>
  )
}
