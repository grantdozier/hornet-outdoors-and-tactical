import PlaceholderImage from '../components/PlaceholderImage'

export default function Gear() {
  return (
    <section className="stack">
      <h2>Gear</h2>
      <div className="page-header">
        <h3>Gear Up for Success</h3>
      </div>
      <p>
        Gear up for success with our comprehensive selection of outdoor and tactical gear. At Hornet Outdoors & Tactical, we're committed to providing you with the tools and equipment you need to excel in any environment. Whether you're hunting, hiking, or engaging in tactical operations, our gear is designed to meet the demands of your adventure. From high-performance optics and rugged backpacks to versatile tools and innovative gadgets, we have everything you need to tackle any challenge with confidence. Explore our gear collection today and prepare to take your outdoor pursuits to the next level.
      </p>

      <div className="grid-3">
        <PlaceholderImage label="Optics placeholder" />
        <PlaceholderImage label="Backpack placeholder" />
        <PlaceholderImage label="Tools placeholder" />
      </div>

      <div className="stack">
        <h3>Vendor links</h3>
        <ul className="link-list">
          <li><a href="https://viamoutdoors.com/" target="_blank">https://viamoutdoors.com/</a></li>
          <li><a href="https://viamoutdoors.com/product-category/game-bags-kill-kits/" target="_blank">https://viamoutdoors.com/product-category/game-bags-kill-kits/</a></li>
          <li><a href="https://www.roamadventureco.com/" target="_blank">https://www.roamadventureco.com/</a> (Need to send paperwork to client)</li>
          <li><a href="https://www.roamadventureco.com/collections" target="_blank">https://www.roamadventureco.com/collections</a></li>
          <li><a href="https://www.roamadventureco.com/collections/rugged-cases" target="_blank">https://www.roamadventureco.com/collections/rugged-cases</a></li>
        </ul>
      </div>
    </section>
  )
}
