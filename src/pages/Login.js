import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      emailValidation: false,
      passwordValidation: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript/50570037 (validação email);
  handleEmail({ target: { value } }) {
    const emailValidation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value);
    this.setState({
      email: value,
      emailValidation,
    });
  }

  handlePassword({ target: { value } }) {
    const PASSWORD_MIN = 6;
    const passwordValidation = value.length >= PASSWORD_MIN;
    this.setState({
      senha: value,
      passwordValidation,
    });
  }

  handleButtonClick(event) {
    event.preventDefault();
    const { teste, history } = this.props;
    const { email } = this.state;
    teste(email);
    history.push('./carteira');
  }

  render() {
    const { email, senha, emailValidation, passwordValidation } = this.state;
    return (
      <div>
        <form>
          <h2>Login</h2>
          <label htmlFor="login-email">
            Email
            <input
              id="login-email"
              type="email"
              value={ email }
              onChange={ this.handleEmail }
              name="email"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="login-password">
            Senha
            <input
              id="login-password"
              type="password"
              value={ senha }
              onChange={ this.handlePassword }
              name="senha"
              data-testid="password-input"
            />
          </label>
          <button
            disabled={ !emailValidation || !passwordValidation }
            type="button"
            onClick={ (event) => this.handleButtonClick(event) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  teste: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  teste: (value) => dispatch(login(value)),
});

export default connect(null, mapDispatchToProps)(Login);
