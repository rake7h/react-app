import { createStore} from 'redux'
import rootReducer from "../reducers/index"

const store = createStore(rootReducer)

/**
-the Redux store is like a brain: it’s in charge for orchestrating all the moving parts in Redux
-the state of the application lives as a single, immutable object within the store
-as soon as the store receives an action it triggers a reducer
-the reducer returns the next state
**/

export default store
