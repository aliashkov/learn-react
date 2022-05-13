import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { itemsReducer } from '../reducers/itemsReducer'
import { customerReducer } from '../reducers/customerReducer'
import { filterReducer } from '../reducers/filterReducer'
import { isSortedReducer } from '../reducers/isSortedReducer'
import { foundItemsReducer } from '../reducers/foundItemsReducer'
import { usersReducer } from '../reducers/usersReducer'
import { isClosedReducer } from '../reducers/IsOpenedReducer'
import { isLoadedReducer } from '../reducers/isLoadedDataReducer'
import { isLoginedReducer } from '../reducers/isLogined'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    itemsReducer,
    customerReducer,
    filterReducer,
    isSortedReducer,
    foundItemsReducer,
    usersReducer,
    isClosedReducer,
    isLoadedReducer,
    isLoginedReducer
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))