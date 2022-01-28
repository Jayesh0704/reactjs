import React from 'react';//Importing pacakage react
import ReactDOM from 'react-dom';//Importing virtual DOM of react
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>//Provides error in app
    <App />
  </React.StrictMode>,//These 3 Lines in yellow are called jsx(javascript syntax extension)...javascript+ html saath sath likhskte
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
