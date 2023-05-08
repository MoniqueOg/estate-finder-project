import React, { useState, useEffect } from "react";
import { getProperties } from "./property";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // fetch the list of properties when the component mounts
    const fetchProperties = async () => {
      const allProperties = await getProperties();
      setProperties(allProperties);
    };

    fetchProperties();
  }, []);

  return (
    <div className="property-list">
      <h2>Properties</h2>
      {properties.length > 0 ? (
        <ul>
          {properties.map((property) => (
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
        <p>No properties found.</p>
      )}
    </div>
  );
}

export default PropertyList;
