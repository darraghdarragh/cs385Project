// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FruitApp from './FruitApp';

function App() {
  return (
    <Router>
      <div>
        <h1>Hi, this is the parent component</h1>
        <hr />
        <Routes>
          <Route path="/" element={<FruitApp />} />
          {/* Add more routes if needed */}
        </Routes>
        <hr />
      </div>
    </Router>
  );
}

export default App;
