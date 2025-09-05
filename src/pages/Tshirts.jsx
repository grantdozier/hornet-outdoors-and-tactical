import PlaceholderImage from '../components/PlaceholderImage'

export default function Tshirts() {
  return (
    <section className="stack">
      <h2>T-shirts</h2>
      <div className="page-header">
        <h3>Make a Statement with Our T-shirts</h3>
      </div>
      <p>
        Make a statement on and off the trail with our collection of outdoor-inspired T-shirts. At Hornet Outdoors & Tactical, we believe that your clothing should reflect your passion for adventure and the great outdoors. That's why we offer a range of T-shirts featuring unique designs and bold graphics inspired by hunting, camping, and tactical pursuits. Made from soft, comfortable fabrics and built to withstand the demands of outdoor life, our T-shirts are perfect for everyday wear or as a stylish addition to your outdoor wardrobe. Explore our collection today and show off your love for adventure with pride.
      </p>

      <div className="grid-3">
        <PlaceholderImage label="T-shirt design 1" />
        <PlaceholderImage label="T-shirt design 2" />
        <PlaceholderImage label="T-shirt design 3" />
      </div>
    </section>
  )
}
