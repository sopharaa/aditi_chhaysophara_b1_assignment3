export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search movies..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
