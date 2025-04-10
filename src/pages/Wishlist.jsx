import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(data);
  }, []);

  const removeFromWishlist = (car) => {
    const updated = wishlist.filter(c => c.id !== car.id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {wishlist.map(car => (
          <CarCard key={car.id} car={car} toggleWishlist={removeFromWishlist} isWishlisted />
        ))}
      </div>
    </div>
  );
}
