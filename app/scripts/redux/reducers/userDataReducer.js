import { FETCH_DATA, FETCH_CARD } from '../actions/types';

// A reducer is a Javascript function taking two parameters: the state and the action.
// Initial values
const initialState = {
  posts: [],
};

// later i have to export rootReducer function
// A reducer function has a switch statement (although unwieldy, a naive reducer could also use if/else).
// The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.
export default function (state = initialState, action) {
  console.log('action', action)
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
}
