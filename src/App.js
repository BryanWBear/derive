import React, { useState } from 'react';
import './App.css';
import CustomCell from './components/CustomCell.js'


function App() {
  return (
    <div className="App">
      <CustomCell current></CustomCell>
    </div>
  );
}

export default App;
