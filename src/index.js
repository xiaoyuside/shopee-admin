import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const isDev = process.env.NODE_ENV === 'development';
if (!isDev) {
  console.log = function() {}
}

ReactDOM.render(<App />, document.getElementById('root'));

