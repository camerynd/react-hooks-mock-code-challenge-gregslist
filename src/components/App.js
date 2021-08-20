import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])
  const [filteredListings, setFilteredListings] = useState('')

  useEffect(() => {

    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data))

  }, [])

  function searchTerm(word) {
    setFilteredListings(listings.filter((item) => item.description.includes(word) ? item : ''))
  }

  function deleteListing(id) {
    const updatedListings = listings.filter(item => item.id !== id)
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header searchTerm={searchTerm} />
      <ListingsContainer listings={filteredListings === '' ? listings : filteredListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
