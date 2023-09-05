import React, {useContext} from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import PropTypes from 'prop-types'

export default function Search({handleFilter, handleInput}) {

  const {categories} = useContext(CategoriesContext);

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
        {categories.map((categorie, id) => 
          <option key={id} value={categorie}>{categorie.toUpperCase()}</option>
        )}
      </select>
    </section>
  );
}

Search.propTypes = {
  handleFilter: PropTypes.func,
  handleInput: PropTypes.func,
}