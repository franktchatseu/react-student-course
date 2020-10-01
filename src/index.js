import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "./i18n";
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

//url de base axios
axios.defaults.baseURL ="http:8080//localhost/api/"

ReactDOM.render(
    <Suspense fallback={null} >
    <App />
  </Suspense>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
