import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// REDUX
import { Provider } from 'react-redux';
import store from './Components/ReduxBasic/Store/Store';



ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root'),

);