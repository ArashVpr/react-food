import React, { useEffect, useState, useRef } from "react";

function SearchForm({ search, setSearch, handleSearch }) {
  const inputRef = useRef(null);
  const onSearch = (e) => {
    console.log(e);
    e.preventDefault();
    handleSearch(search);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={onSearch} className="flex items-center space-x-2">
      <input
        type="text"
        name="search"
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search for meals..."
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-green-600">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
