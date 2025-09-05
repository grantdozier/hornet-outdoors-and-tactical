import PlaceholderImage from '../components/PlaceholderImage'

export default function TentsCamping() {
  return (
    <section className="stack">
      <h2>Tents and Camping</h2>
      <p><strong>Header:</strong> Explore Our Tents and Camping Gear</p>
      <p>
        <strong>Content:</strong> Elevate your outdoor experience with our premium selection of tents and camping gear. At Hornet Outdoors & Tactical, we understand the importance of reliable shelter and quality equipment when spending time in the great outdoors. Whether you're planning a weekend camping trip with the family or embarking on a backcountry adventure, we have everything you need to stay comfortable, safe, and prepared. From durable tents and sleeping bags to essential camping accessories and survival gear, our collection is designed to meet the needs of outdoor enthusiasts of all levels. Shop now and discover the perfect gear for your next outdoor excursion.
      </p>

      <div className="grid-3">
        <PlaceholderImage label="Tent placeholder" />
        <PlaceholderImage label="Sleeping bag placeholder" />
        <PlaceholderImage label="Camp stove placeholder" />
      </div>

      <div className="stack">
        <h3>Vendor links</h3>
        <ul className="link-list">
          <li><a href="https://www.roamadventureco.com/" target="_blank">https://www.roamadventureco.com/</a> (Need to send paperwork to client)</li>
          <li><a href="https://www.roamadventureco.com/" target="_blank">https://www.roamadventureco.com/</a></li>
          <li><a href="https://www.roamadventureco.com/collections/rugged-cases" target="_blank">https://www.roamadventureco.com/collections/rugged-cases</a></li>
          <li><a href="https://litefighter.com/product-category/military-tents-shelters/" target="_blank">https://litefighter.com/product-category/military-tents-shelters/</a> (Need to send paperwork to client)</li>
        </ul>
      </div>
    </section>
  )
}
