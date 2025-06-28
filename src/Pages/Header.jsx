import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <h1 className="logo">🛍️ MyShop</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}
