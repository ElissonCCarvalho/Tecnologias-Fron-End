import React, { useState } from 'react';
import CharCounter from './CharCounter/CharCounter';
import Login from './Login/Login';

const App = () =>  {
  const [flagApp, setFlagApp] = useState(true);

  const toggleApp = (flagApp) => {
    setFlagApp(flagApp);
  }

  return (
    <div className="container full-height">
      { flagApp ? <CharCounter /> : <Login /> }

      <div className="buttons">
        <button onClick={ () => toggleApp(true) }>Contador Caractere</button>
        <button onClick={ () => toggleApp(false) }>Login</button>
      </div>
    </div>
  );
}

export default App;
