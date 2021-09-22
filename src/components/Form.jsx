import React from 'react';
import { connect } from 'react-redux';
import fetchMoedas from '../services/index';
import { recieveCurrencies } from '../actions/index';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
    recieveCurrencies();
  }

  async fetchAPI() {
    const response = await fetchMoedas();
    const results = Object.keys(response);
    const currencieMaxLenght = 3;
    const currencies = results.filter((result) => result.length === currencieMaxLenght);
    this.setState({ currencies });
  }

  tagLabel() {
    return (
      <label htmlFor="tag">
        Tag:
        <select name="tag" id="tag">
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  paymentLabel() {
    return (
      <label htmlFor="tag">
        Método de Pagamento:
        <select name="payment" id="payment">
          <option value="dinheiro">Dinheiro</option>
          <option value="credit-card">Cartão de crédito</option>
          <option value="debit-card">Cartão de débito</option>
        </select>
      </label>
    );
  }

  render() {
    const { currencies } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input id="valor" type="text" name="valor" />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input id="descricao" type="text" name="descricao" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            {currencies.map((currency) => (
              <option key={ currency }>{currency}</option>
            ))}
          </select>
        </label>
        { this.paymentLabel() }
        { this.tagLabel() }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  recieveCurrencies: () => dispatch(recieveCurrencies()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
