import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/StoreState';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}>
<App/>
</Provider>, document.getElementById('app-root'));