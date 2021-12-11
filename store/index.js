import { createStore, combineReducers,applyMiddleware } from "redux";

import ListReducer from "./reducers/list.reducers";

const RootReducer= combineReducers({
    odontologos: ListReducer,
})

export default createStore(RootReducer);