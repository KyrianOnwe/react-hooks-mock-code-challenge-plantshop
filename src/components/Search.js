import React from "react";

function Search(func) {
   const searchPlants = func.searchPlant
  //  console.log(func.searchPlant)



  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchPlants(e.target.value)}
      />
    </div>
  );
}

export default Search;
