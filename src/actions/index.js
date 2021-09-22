// Coloque aqui suas actions
import fetchMoedas from '../services';

export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';

export const login = (email) => ({

  type: LOGIN,
  email,
});

export const recieveCurrencies = (currencies) => ({
  type: 'CURRENCIES',
  currencies,
});

export const addCurrenciesThunk = () => async (dispatch) => {
  const currencies = await fetchMoedas();
  delete currencies.USDT;
  dispatch(recieveCurrencies(currencies));
};
