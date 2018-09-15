import { ADD_ARTICLE } from '../constants/action-types'
// Since strings are prone to typos and duplicates it’s better to have action types declared as constants.

/*
 * Action creaters
 * Every action needs a type property for describing how the state should change.
 * It is a best pratice to wrap every action within a function. Such function is an action creator.
 */

 //type property is nothing more than a string.


export const addArticle = article => ({
  type: 'ADD_ARTICLE',
  payload: { name: 'React Redux Tutorial', id: 1 }
})
