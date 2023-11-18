import React, { useState } from 'react';
import './style.css';
import '../index.css';

const CharCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleChange = (event) => {
    setCounter(event.target.value.length);
  }

  return (
    <div className="container">
      <input
        className="input-box"
        type="text"
        placeholder="Digite um texto qualquer"          
        onChange={handleChange}
      />
      <p>Este texto contém {counter} caracteres.</p>
    </div>
  )
}

export default CharCounter;
