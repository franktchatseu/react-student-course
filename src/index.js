import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//url de base axios
axios.defaults.baseURL = "http://localhost:8000/api/";
//inject the headers authorization in all request
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
ReactDOM.render(
  <Suspense fallback={null} >
    <App />
  </Suspense>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
