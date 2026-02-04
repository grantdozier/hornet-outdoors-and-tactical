import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../data/inventory';

export default function Archery() {
  const products = getProductsByCategory('Archery');

  return (
    <section className="stack">
      <h2>Archery</h2>
      <p className="text-muted">Bows, arrows, and archery accessories for hunting and target shooting.</p>

      {products.length > 0 ? (
        <div className="grid-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              price={product.price.toFixed(2)}
              imageSrc={product.image}
              link={`/shop/archery/${product.slug}`}
            />
          ))}
        </div>
      ) : (
        <div className="coming-soon">
          <p>No products available yet.</p>
        </div>
      )}
    </section>
  );
}
