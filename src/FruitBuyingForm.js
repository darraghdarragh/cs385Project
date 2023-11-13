// FruitBuyingForm.js
import React, { useState } from 'react';

function FruitBuyingForm({ fruits }) {
  const [selectedFruit, setSelectedFruit] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleFruitChange = (e) => {
    setSelectedFruit(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleBuyFruit = () => {
    // Implement logic to handle the fruit buying process
    console.log(`Buying ${quantity} ${selectedFruit}(s)`);
  };

  return (
    <div>
      <h1>Fruit Buying Form</h1>
      <label>
        Select Fruit:
        <select value={selectedFruit} onChange={handleFruitChange}>
          <option value="">Select a fruit</option>
          {fruits.map((fruit, index) => (
            <option key={index} value={fruit.name}>
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={handleQuantityChange} />
      </label>
      <br />
      <button onClick={handleBuyFruit}>Buy Fruit</button>
    </div>
  );
}

export default FruitBuyingForm;
