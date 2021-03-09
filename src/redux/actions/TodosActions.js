import axios from 'axios'

export const ACTION_TYPES={
  getAllQuotes : 'GET_ALL_QUOTES'
};
// actions
export const getAllQuotes = (quote) => {
  return {
    type: ACTION_TYPES.getAllQuotes,
    payload: quote
  };
}
//thunks
export const thunkGetAllQuotes = () => async (dispatch)=> {
  let res = await axios.get('https://prof-quotes.herokuapp.com/api/quotes')
  dispatch(getAllQuotes(res.data.quotes));
}


