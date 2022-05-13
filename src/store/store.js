import { legacy_createStore, combineReducers } from 'redux'
import { newsReducer } from '../reducers/newsReducer'
import { customerReducer } from '../reducers/customerReducer'
import { filterReducer } from '../reducers/filterReducer'
import { isSortedReducer } from '../reducers/isSortedReducer'
import { foundNewsReducer } from '../reducers/foundNewsReducer'


const rootReducer = combineReducers({
    newsReducer,
    customerReducer,
    filterReducer,
    isSortedReducer,
    foundNewsReducer
})


export const store = legacy_createStore(rootReducer)