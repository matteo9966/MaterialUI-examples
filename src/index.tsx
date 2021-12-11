import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeGlobalProvider} from './ThemeProvider/ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
   <ThemeGlobalProvider>

    <App />
   </ThemeGlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

