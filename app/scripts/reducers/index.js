import { ADD_ARTICLE } from "../constants/action-types";

//A reducer is a Javascript function taking two parameters: the state and the action.

//Initial values
const initialState = {
 articles: []
}

//later i have to export rootReducer function
// A reducer function has a switch statement (although unwieldy, a naive reducer could also use if/else).
// The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      state.articles.push(action.payload);
      return state;
    default:
      return state;
  }
}

export default rootReducer
