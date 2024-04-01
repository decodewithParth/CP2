import React from "react";
import "./SearchRecipeByName.css";
import searchIcon from "./search-icon.png"; // Import your search icon image

function SearchRecipeByName() {
  return (
    <div className="searchBox">
      <div className="heading">
        <h1>Find Recipes You'll Love</h1>
      </div>
      <div className="search-input">
        <input
          type="text"
          name="recipe_search"
          placeholder="Appetizing Manchurian"
        />
        <button id="search-dish">Find My Dish</button>
      </div>
    </div>
  );
}

export default SearchRecipeByName;
