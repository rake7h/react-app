// Since strings are prone to typos and duplicates it’s better to have action
// types declared as constants
/*
 * Action creaters
 * Every action needs a type property for describing how the state should change.
 * It is a best pratice to wrap every action within a function. Such function is an action creator.
 */
// type property is nothing more than a string.

import { FETCH_DATA } from './types';
import axiosInstance from '../../utils/api';

const fetchPosts = () => function action(dispatch) {
  dispatch({ type: FETCH_DATA });
  const request = axiosInstance.get('https://jsonplaceholder.typicode.com/posts');
  return request.then((response) => dispatch({
    type: FETCH_DATA,
    payload: response,
  }));
};

export default fetchPosts;
