import { legacy_createStore, combineReducers } from 'redux'
import { itemsReducer } from '../reducers/itemsReducer'
import { customerReducer } from '../reducers/customerReducer'
import { filterReducer } from '../reducers/filterReducer'
import { isSortedReducer } from '../reducers/isSortedReducer'
import { foundItemsReducer } from '../reducers/foundItemsReducer'


const rootReducer = combineReducers({
    itemsReducer,
    customerReducer,
    filterReducer,
    isSortedReducer,
    foundItemsReducer
})


export const store = legacy_createStore(rootReducer)