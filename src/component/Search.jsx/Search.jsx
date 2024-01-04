import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";
const SearchComponent = ({ data, name }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = data.filter((item) =>
      item[name].toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
    setShowResults(results.length > 0);
  };

  const handleItemClick = () => {
    setShowResults(false);
  };

  return (
    <>
      <input
        autoFocus
        type="text"
        placeholder="ابحث..."
        value={searchTerm}
        className="w-100 rounded-3 rounded-start-0"
        onChange={handleSearch}
      />
      {showResults && (
        <ul className="position-absolute top-100 bg-white w-100 p-2 shadow rounded-3 mt-1">
          {searchResults.map((result) => (
            <Link
              key={result.id}
              to={`/course/${result.id}`}
              className="s-l-li"
              onClick={handleItemClick}
            >
              <li className="p-1 s-l-li">{result[name]}</li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchComponent;
