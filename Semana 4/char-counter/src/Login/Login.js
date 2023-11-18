import React, { useState } from 'react';
import '../index.css';
import './style.css';

const Login = () => {

  const titles = ["Por favor faça o login", "Seja bem vindo!"];
  const imgPaths = ["block.png", "check.png"];
  const btnTexts = ["Login", "Logout"];

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(index > 0 ? 0 : 1)
  };

  return (
    <div className='container'>
      <h2>{titles[index]}</h2>
      <img src={ imgPaths[index] } />
      <button id="btnLogin" onClick={ handleClick }>{ btnTexts[index] }</button>
    </div>
  );
};

export default Login;
