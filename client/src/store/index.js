import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerTodo from "./reducers/reducerTodo"
import thunk from "redux-thunk";

const reducer = combineReducers({
    reducerTodo
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store