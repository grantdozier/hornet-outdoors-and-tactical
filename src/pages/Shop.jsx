import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'

export default function Shop() {
  return (
    <section className="stack">
      <h2>Shop</h2>
      <div className="page-header">
        <h3>Explore Our Product Catalog</h3>
      </div>
      <p>
        Dive into the world of outdoor adventure and tactical excellence with Hornet Outdoors & Tactical. Our extensive product catalog features a wide range of high-quality gear and equipment designed to enhance your outdoor experience and support your mission. Whether you're in need of rugged clothing that can withstand the elements, reliable equipment that won't let you down in the field, or innovative accessories to take your gear to the next level, we have you covered. With a focus on quality, durability, and performance, each item in our catalog has been handpicked by our team of experts to ensure maximum satisfaction and reliability. Shop with confidence at Hornet Outdoors & Tactical and gear up for your next adventure today.
      </p>

      <div className="grid-3">
        <Link to="/shop/tents-and-camping" className="card">
          <PlaceholderImage label="Tents & Camping" />
          <div className="card__body"><h3>Tents & Camping</h3></div>
        </Link>
        <Link to="/shop/gear" className="card">
          <PlaceholderImage label="Gear" />
          <div className="card__body"><h3>Gear</h3></div>
        </Link>
        <Link to="/shop/apparel" className="card">
          <PlaceholderImage label="Apparel" />
          <div className="card__body"><h3>Apparel</h3></div>
        </Link>
      </div>
    </section>
  )
}
