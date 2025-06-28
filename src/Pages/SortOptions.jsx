export default function SortOptions({ sort, setSort }) {
  return (
    <div>
      <label>Sort by:</label>
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Default</option>
        <option value="price-asc">Price low→high</option>
        <option value="price-desc">Price high→low</option>
        <option value="name-asc">Name A→Z</option>
        <option value="name-desc">Name Z→A</option>
      </select>
    </div>
  );
}
