import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2 className="card-title">{product.title}</h2>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating.rate}</p>
      <Link to={`/product/${product.id}`} className="btn">View Details</Link>
    </div>
  );
}
