import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <fieldset>
        <div>
          <input type="email" data-testid="email-input" />
          <input type="text" data-testid="password-input" />
          <button type="button">Entrar</button>
        </div>
      </fieldset>
    );
  }
}

export default Login;
