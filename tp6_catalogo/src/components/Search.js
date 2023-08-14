import React from "react";

export default function Search({handleFilter, handleInput}) {
  return (
    <section className="search-filter">
      <label>Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search products..."
        onChange={handleInput}
        className="input"
        autoComplete="off"
      />
      <label>Filter By:</label>
      <select id="category" onChange={handleFilter}>
        <option value="all">All Categories</option>
        <option value="rings">Rings</option>
        <option value="collars">Collars</option>
        <option value="earrings">Earrings</option>
      </select>
    </section>
  );
}
