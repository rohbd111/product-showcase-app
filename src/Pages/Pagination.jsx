export default function Pagination({ current, total, perPage, onChange }) {
  const pages = Math.ceil(total / perPage);
  return (
    <div className="pagination">
      <button disabled={current === 1} onClick={() => onChange(current - 1)}>Prev</button>
      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => onChange(i + 1)}>{i + 1}</button>
      ))}
      <button disabled={current === pages} onClick={() => onChange(current + 1)}>Next</button>
    </div>
  );
}
