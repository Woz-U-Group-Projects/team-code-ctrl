import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router> <App /> </Router>, document.getElementById('root'));
=======
import LoginPage from '../src/login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LoginPage />, document.getElementById('root'));






>>>>>>> 9978d48d0dcd355c6bad0d1b745008a2b1890fe4

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
