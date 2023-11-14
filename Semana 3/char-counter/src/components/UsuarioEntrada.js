import React, { Component } from 'react';

class UsuarioEntrada extends Component {
  constructor() {
    super();
    this.state = {
      novoNome: '',
    };
  }

  handleChange = (event) => {
    this.setState({ novoNome: event.target.value });
    this.props.atualizarNome(event.target.value);
  }

  render() {
    return (
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Login"
          value={this.state.novoNome}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default UsuarioEntrada;
