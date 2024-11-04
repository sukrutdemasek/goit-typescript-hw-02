import { ChangeEvent, FormEvent, useState } from "react";
import "./SearchBar.css";
import React from "react";
interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          className="inputField"
        />
        <button type="submit" className="searchBtn">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
