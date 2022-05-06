import { legacy_createStore , combineReducers} from 'redux'
import {newsReducer} from './newsReducer'
import { customerReducer} from './customerReducer'


const rootReducer = combineReducers({
    newsReducer,
    customerReducer
})


export const store = legacy_createStore(rootReducer)