import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';

export default function ProductCard({ 
  title, 
  price, 
  imageSrc, 
  imageLabel, 
  link, 
  soldOut = false 
}) {
  return (
    <div className="product-card">
      <Link to={link || '#'} className="card">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title} 
            className="product-card__image" 
          />
        ) : (
          <PlaceholderImage label={imageLabel || title} />
        )}
        <div className="card__body">
          <h3>{title}</h3>
          {price && (
            <div className="product-card__price">
              {soldOut ? (
                <span className="product-card__sold-out">Sold Out</span>
              ) : (
                <span>${price}</span>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
