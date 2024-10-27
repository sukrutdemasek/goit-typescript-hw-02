import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className="submitForm">
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="inputField"
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
    </header>
  );
}
