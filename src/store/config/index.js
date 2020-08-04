import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { fetchStates } from '../actions'
import rootReducer from '../reducers'
const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

store.dispatch(fetchStates()).then(() => console.log(store.getState()))

export default store;