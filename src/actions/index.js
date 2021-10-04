export const USER_EMAIL = 'USER_EMAIL';
export const LOADING = 'LOADING';
export const SAVED_MONEY = 'SAVED_MONEY';
export const ERROR = 'ERROR';
export const ADD_EXPENSES = 'ADD_EXPENSES';

export const LOGIN = 'LOGIN';

export const userAction = (state) => ({
  type: USER_EMAIL,
  state,
});

export const loading = () => ({
  type: LOADING,
});

export const saveCoins = (payload) => ({
  type: SAVED_MONEY,
  payload,
});

export const errorMessage = (payload) => ({
  type: ERROR,
  payload,
});

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  payload: expense,
});

export const login = (email, totalExpenses) => ({
  type: LOGIN,
  payload: {
    email,
    totalExpenses,
  },
});

export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const deleteExpenses = (id) => ({
  type: DELETE_EXPENSES,
  payload: {
    id,
  },
});

export const thunkAPI = () => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(loading());
  try {
    const response = await fetch(URL);
    console.log(response);
    const moedas = await response.json();
    delete moedas.USDT;
    dispatch(saveCoins(moedas));
  } catch (error) {
    console.log(error.message);
    dispatch(errorMessage(error.message));
  }
};

export const thunkADD = (expenses) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  dispatch(loading());
  try {
    const response = await fetch(URL);
    const cotacao = await response.json();
    delete cotacao.USDT;
    expenses.exchangeRates = cotacao;
    dispatch(addExpenses(expenses));
  } catch (error) {
    console.log(error.message);
    dispatch(errorMessage(error.message));
  }
};
