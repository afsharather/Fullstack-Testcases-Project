import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './index.css';  // Comment this out if you don't have an index.css
import reportWebVitals from './reportWebVitals';  // Add this if you want to measure performance

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
