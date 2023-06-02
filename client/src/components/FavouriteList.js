import React, { useState, useEffect } from "react";
import { getFavorites } from "./favorites";
import { getPropertyById } from "./property";

function FavoritesList({ userId }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // fetch the list of favorite properties when the component mounts
    const fetchFavorites = async () => {
      const favoriteIds = await getFavorites(userId);
      const favoriteProperties = await Promise.all(
        favoriteIds.map((id) => getPropertyById(id))
      );
      setFavorites(favoriteProperties);
    };

    fetchFavorites();
  }, [userId]);

  return (
    <div className="favorites-list">
      <h2>Favorite Properties</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((property) => (
            <li key={property.id}>
              <h3>{property.title}</h3>
              <p>{property.description}</p>
              <p>Price: ${property.price}</p>
              <p>Bedrooms: {property.bedrooms}</p>
              <p>Bathrooms: {property.bathrooms}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite properties found.</p>
      )}
    </div>
  );
}

export default FavoritesList;
