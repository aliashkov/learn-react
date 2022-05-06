import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore} from 'redux'
import { Provider } from "react-redux";
import {store} from './store/store'

const defaultStore = {
    cash : 5,
}









//const store = legacy_createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>

);

