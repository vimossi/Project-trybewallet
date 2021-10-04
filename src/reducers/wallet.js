import { ADD_EXPENSES, DELETE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  state: '',
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOADING':
    return { ...state, loading: true };
  case 'SAVED_MONEY':
    return { ...state, currencies: action.payload };
  case 'ERROR':
    return { ...state, error: action.payload };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }] };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id),
    };
  default:
    return state;
  }
};

export default wallet;
