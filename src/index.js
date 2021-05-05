import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3K6QMqk4-xws6nYHuwo4RUC6R_qjT_os",
    authDomain: "web-messager-9b9a1.firebaseapp.com",
    projectId: "web-messager-9b9a1",
    storageBucket: "web-messager-9b9a1.appspot.com",
    messagingSenderId: "275093561655",
    appId: "1:275093561655:web:18aee14053460a42213ab2",
    measurementId: "G-86NF9D2N0N"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
