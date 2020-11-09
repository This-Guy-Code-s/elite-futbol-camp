import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './util/styles/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'



const store = createStore(reducer,applyMiddleware(thunk))




ReactDOM.render(
	<Router>
	<Provider store={store}>
    <App />
  </Provider>
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
