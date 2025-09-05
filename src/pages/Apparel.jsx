import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage'

export default function Apparel() {
  return (
    <section className="stack">
      <h2>Apparel</h2>
      <div className="page-header">
        <h3>Performance Apparel for Outdoor Enthusiasts</h3>
      </div>
      <p>
        Stay comfortable, protected, and stylish on your outdoor adventures with our performance apparel collection. At Hornet Outdoors & Tactical, we believe that quality clothing is essential for enjoying the outdoors to the fullest. That's why we offer a range of high-performance apparel designed to keep you comfortable and protected in any conditions. From moisture-wicking base layers and insulated jackets to durable pants and breathable shirts, our apparel is engineered for performance and built to last. Whether you're hunting in the backcountry or hiking on the trail, trust Hornet Outdoors & Tactical to keep you covered from head to toe.
      </p>

      <div className="grid-3">
        <Link to="/shop/apparel/hats" className="card">
          <PlaceholderImage label="Hats" />
          <div className="card__body"><h3>Hats</h3></div>
        </Link>
        <Link to="/shop/apparel/tshirts" className="card">
          <PlaceholderImage label="T-shirts" />
          <div className="card__body"><h3>T-shirts</h3></div>
        </Link>
        <PlaceholderImage label="Other apparel" />
      </div>

      <p className="muted">Vendor List (Need API)</p>
    </section>
  )
}
