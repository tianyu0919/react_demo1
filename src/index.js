import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import 'antd/dist/antd.css';
import { hot } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import '@utils/spacingjs';

const App = hot(module)(Layout);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
