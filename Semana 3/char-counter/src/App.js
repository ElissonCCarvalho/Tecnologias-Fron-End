import React, { Component } from 'react';
import UsuarioEntrada from './components/UsuarioEntrada';
import UsuarioSaida from './components/UsuarioSaida';

class App extends Component {
  constructor() {
    super();

    this.login = 'Elisson';
    this.state = { login: this.login };
  }

  setLogin = (novoNome) => {
    this.setState({ login: novoNome });
  }

  render() {
    return (
      <div>
        <UsuarioEntrada atualizarNome={this.setLogin} />
        <UsuarioSaida login={this.login} />
        <UsuarioSaida login={this.state.login} />
      </div>
    );
  }
}

export default App;
