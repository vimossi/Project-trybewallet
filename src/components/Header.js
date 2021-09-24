import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from './Table';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getTotalExpenses = this.getTotalExpenses.bind(this);
  }

  getTotalExpenses() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += parseFloat(value) * parseFloat(exchangeRates[currency].ask);
    });
    return soma.toFixed(2);
  }

  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">
          Despesa total: R$
          <span>{this.getTotalExpenses()}</span>
        </p>
        <p data-testid="header-currency-field">Câmbio: BRL</p>
        <Table />
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
