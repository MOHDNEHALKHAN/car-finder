import { Link } from 'react-router';

export default function CarCard({ car, toggleWishlist, isWishlisted }) {
  return (
    <div className="border p-4 rounded shadow">
      <img src={car.image} alt={car.model} className="w-full h-40 object-cover mb-2" />
      <h2 className="font-bold">{car.brand} {car.model}</h2>
      <p>${car.price} - {car.fuel} - {car.seats} seats</p>
      <div className="flex justify-between mt-2">
        <Link to={`/car/${car.id}`} className="text-blue-500">View Details</Link>
        <button onClick={() => toggleWishlist(car)} className="text-red-500">
          {isWishlisted ? 'Remove' : 'Wishlist'}
        </button>
      </div>
    </div>
  );
}
