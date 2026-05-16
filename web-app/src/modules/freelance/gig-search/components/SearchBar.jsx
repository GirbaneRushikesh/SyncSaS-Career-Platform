import { useEffect, useState } from "react";

const SearchBar = ({ value, onChange, delay = 300 }) => {
  const [local, setLocal] = useState(value || "");

  useEffect(() => {
    setLocal(value || "");
  }, [value]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (onChange) onChange(local);
    }, delay);
    return () => clearTimeout(t);
  }, [local, delay, onChange]);

  return (
    <input
      type="text"
      placeholder="Search gigs..."
      value={local}
      onChange={(e) => setLocal(e.target.value)}
      style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
