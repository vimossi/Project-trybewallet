import { USER_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  totalExpenses: 0,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_EMAIL:
    return { ...state,
      email: action.state,
      totalExpenses: action.totalExpenses };
  default:
    return state;
  }
};

export default user;
