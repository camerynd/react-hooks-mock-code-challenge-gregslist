import React, {useState} from "react";

function ListingCard({listing, deleteListing}) {

  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite(!favorite)
  }

  function handleDelete() {

    fetch(`http://localhost:6001/listings/${listing.id}`, { method: 'DELETE' })
    deleteListing(listing.id)

  }

  return (
    <li name={listing.description} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image || "https://via.placeholder.com/300x300"} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
