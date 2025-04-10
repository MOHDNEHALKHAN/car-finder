import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">Car Finder</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav>
    </header>
  );
}
