import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { recieveCurrencies } from '../actions/index';

class Header extends React.Component {
  // componentDidMount() {
  //   recieveCurrencies();
  // }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">Despesa: 0</p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  recieveCurrencies: () => dispatch(recieveCurrencies()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  // currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
