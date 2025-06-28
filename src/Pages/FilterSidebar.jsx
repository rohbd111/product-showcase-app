export default function FilterSidebar({ categories, filters, setFilters }) {
  return (
    <div className="sidebar">
      <label>Category:</label>
      <select
        value={filters.category}
        onChange={(e) => setFilters(f => ({ ...f, category: e.target.value }))}
      >
        <option value="">All</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <br /><br />
      <label>Max Price: ₹{filters.priceRange[1]}</label>
      <input
        type="range"
        min="0"
        max="1000"
        value={filters.priceRange[1]}
        onChange={e => setFilters(f => ({ ...f, priceRange: [0, +e.target.value] }))}
      />
    </div>
  );
}
