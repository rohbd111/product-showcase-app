import Header from './Header';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { cart, total } = useCart();

  return (
    <>
      <Header />
      <div className="container">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.title} — ₹{item.price}
                </li>
              ))}
            </ul>
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </>
        )}
      </div>
    </>
  );
}
