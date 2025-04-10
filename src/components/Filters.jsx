export default function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex gap-4 p-4 flex-wrap">
      <input
        name="search"
        placeholder="Search..."
        className="p-2 border"
        value={filters.search}
        onChange={handleChange}
      />

      <select name="brand" onChange={handleChange} value={filters.brand} className="p-2 border">
        <option value="">All Brands</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Tesla">Tesla</option>
        <option value="BMW">BMW</option>
        <option value="Kia">Kia</option>
      </select>

      <select name="fuel" onChange={handleChange} value={filters.fuel} className="p-2 border">
        <option value="">All Fuels</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>

      <select name="sort" onChange={handleChange} value={filters.sort} className="p-2 border">
        <option value="">Sort By Price</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
}
