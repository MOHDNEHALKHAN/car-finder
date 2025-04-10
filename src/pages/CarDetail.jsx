import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`https://car-finder-4a64.onrender.com/cars/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <img src={car.image} alt={car.model} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mt-2">{car.brand} {car.model}</h1>
      <p className="mt-2">Price: ${car.price}</p>
      <p>Fuel: {car.fuel}</p>
      <p>Seats: {car.seats}</p>
    </div>
  );
}
