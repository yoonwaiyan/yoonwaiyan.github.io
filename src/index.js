// import another component
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

console.log('loaded');

ReactDOM.render(<App />, document.getElementById('root'));
