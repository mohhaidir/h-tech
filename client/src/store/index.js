import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerUser from "./reducers/reducerUser"
import thunk from "redux-thunk";

const reducer = combineReducers({
    reducerUser
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store