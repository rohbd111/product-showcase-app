import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import Header from './Header';


export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="details">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>₹{product.price}</p>
        <p>{product.description}</p>
        <p>⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </>
  );

}
