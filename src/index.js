import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {createStore, applyMiddleware} from 'redux';
// import appReducers from './reducers/index';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
