// FruitBuyingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function FruitBuyingPage() {
  return (
    <div>
      {/* Display your content based on the route */}
      <h1>Fruit Buying Page</h1>
      <Link to="/fruits">Go to Fruits</Link>
      {/* Add your content here */}
    </div>
  );
}

export default FruitBuyingPage;
