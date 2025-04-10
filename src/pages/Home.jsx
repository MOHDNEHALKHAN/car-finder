import { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import CarCard from '../components/CarCard';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    fuel: '',
    sort: ''
  });
  const [wishlist, setWishlist] = useState(() =>
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  // Fetch all cars once
  useEffect(() => {
    fetch('https://car-finder-4a64.onrender.com/cars')
      .then((res) => res.json())
      .then((data) => {
        setAllCars(data);
      });
  }, []);

  // Apply filters and sort
  useEffect(() => {
    let filtered = [...allCars];

    if (filters.search) {
      filtered = filtered.filter(car =>
        car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand) {
      filtered = filtered.filter(car => car.brand === filters.brand);
    }

    if (filters.fuel) {
      filtered = filtered.filter(car => car.fuel === filters.fuel);
    }

    if (filters.sort === 'low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (filters.sort === 'high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setCars(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters, allCars]);

  const toggleWishlist = (car) => {
    const updated = wishlist.find(c => c.id === car.id)
      ? wishlist.filter(c => c.id !== car.id)
      : [...wishlist, car];

    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div>
      <Filters filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {currentCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.some(c => c.id === car.id)}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={() =>
            setCurrentPage(prev =>
              prev * carsPerPage < cars.length ? prev + 1 : prev
            )
          }
          disabled={currentPage * carsPerPage >= cars.length}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="text-center mt-2 text-sm text-gray-600 dark:text-gray-300">
        Page {currentPage}
      </p>
    </div>
  );
}
