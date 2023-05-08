import { useState, useEffect } from 'react';
import axios from 'axios';

function Data() {
  const [propertyData, setPropertyData] = useState(null);
  const [averagePricePerSqft, setAveragePricePerSqft] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      // Make a GET request to retrieve property data
      const response = await axios.get('/api/properties');
      
      // Set the property data state
      setPropertyData(response.data);
      
      // Calculate the average price per square foot
      const avgPricePerSqftResponse = await axios.post('/api/data/analyze', response.data);
      
      // Set the average price per square foot state
      setAveragePricePerSqft(avgPricePerSqftResponse.data);
    }
    
    fetchData();
  }, []);
  
  if (!propertyData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      <h2>Property Data</h2>
      <ul>
        {propertyData.map((property) => (
          <li key={property.link}>
            {property.address} - {property.price} - {property.beds} beds - {property.baths} baths - {property.sqft} sqft
          </li>
        ))}
      </ul>
      
      {averagePricePerSqft && (
        <div>
          <h2>Average Price Per Sqft</h2>
          <p>{averagePricePerSqft}</p>
        </div>
      )}
    </div>
  );
}
