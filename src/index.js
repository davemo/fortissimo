import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
