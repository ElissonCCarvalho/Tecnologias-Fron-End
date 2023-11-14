import React from 'react';

const UsuarioSaida = (props) => {
  return (
    <div className="user-output">
      <p>Login: {props.login}</p>
      <p>Isso não é um chapéu!</p>
    </div>
  );
}

export default UsuarioSaida;
