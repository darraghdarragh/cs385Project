// FruitList.js
import React from 'react';

function FruitList({ fruits }) {
  return (
    <div>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>Fruit: {fruit.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
