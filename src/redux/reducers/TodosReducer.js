import { ACTION_TYPES } from "../actions/TodosActions";
// state
const INITIAL_STATE = {
  quotes: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.getAllQuotes:
      return {
        ...state,
        quotes: action.payload,
      };

    default:
      return state;
  }
};
export default reducer