import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

/**
-the Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
-the state of the application lives as a single, immutable object within the store
-as soon as the store receives an action it triggers a reducer
-the reducer returns the next state
* */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

export default store;
