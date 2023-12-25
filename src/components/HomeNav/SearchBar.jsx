// components/SearchBar.js
import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="relative">
        <input
          type="search"
          className="py-1.5 border-2 border-gray-400 pl-10 pr-4 w-[30rem] bg-gray-100 rounded-sm text-sm focus:outline-none focus:shadow-outline"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6"></path>
            <circle cx="10" cy="10" r="8"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
