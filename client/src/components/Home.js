import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Real Estate Finder</h1>
      <p>Find your dream home with ease using our powerful real estate search engine.</p>
      <ul>
        <li><Link to="/Properties.js">View Properties</Link></li>
        <li><Link to="/Notifications.js">Set Notifications</Link></li>
        <li><Link to="/Favorites.js">View Favorites</Link></li>
      </ul>
    </div>
  );
}

export default Home;
