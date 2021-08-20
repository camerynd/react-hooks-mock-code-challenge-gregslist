import React, {useState} from "react";

function Search({searchTerm}) {

  const [searchedTerm, setSearchTerm] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchedTerm)
    searchTerm(searchedTerm);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchedTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
