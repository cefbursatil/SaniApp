import { createStore, combineReducers,applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import ListReducer from "./reducers/list.reducers";
import Reactotron from '../ReactotronConfig'

const RootReducer= combineReducers({
    odontologos: ListReducer,
})
export default createStore(RootReducer, 
    compose(
        applyMiddleware(thunk),
        Reactotron.createEnhancer(),
    )
)