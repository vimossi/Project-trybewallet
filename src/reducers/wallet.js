// teste
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return { ...state, currencies: action.currencies };
  case 'EXPENSES':
    return { ...state, expenses: action.expenses };
  default:
    return state;
  }
}
