import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { thunkAPI, thunkADD } from '../actions/index';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      method: 'Dinheiro',
      currency: 'USD',
      tag: 'Alimentação',
      exchangeRates: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { thunkCoins } = this.props;
    thunkCoins();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick() {
    const { addExpense } = this.props;
    addExpense(this.state);
  }

  render() {
    const { moneys } = this.props;
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input type="text" id="Valor" name="value" onChange={ this.handleChange } />
        </label>

        <label htmlFor="Descrição">
          Descrição
          <input
            type="text"
            id="Descrição"
            name="description"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="Moeda">
          Moeda
          <select id="Moeda" name="currency" onChange={ this.handleChange }>
            { Object.keys(moneys)
              .map((elemento) => <option key={ elemento }>{ elemento }</option>)}
          </select>
        </label>
        <label htmlFor="Metodo">
          Método de pagamento
          <select name="method" id="Metodo" onChange={ this.handleChange }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="Despesa">
          Tag
          <select name="tag" id="Despesa" onChange={ this.handleChange }>
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>

    );
  }
}

ExpensesForm.propTypes = {
  addExpense: PropTypes.func,
  moneys: PropTypes.any,
  thunkCoins: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  moneys: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  thunkCoins: () => dispatch(thunkAPI()),
  addExpense: (state) => dispatch(thunkADD(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
