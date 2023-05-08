import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Real Estate Finder</h1>
      <p>Find your dream home with ease using our powerful real estate search engine.</p>
      <ul>
        <li><Link to="/properties">View Properties</Link></li>
        <li><Link to="/notifications">Set Notifications</Link></li>
        <li><Link to="/favorites">View Favorites</Link></li>
      </ul>
    </div>
  );
}

export default Home;
