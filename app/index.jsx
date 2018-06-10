import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/redux/store';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'app/styles/app.less';

import Layout from 'app/containers/Layout';
import ErrorBoundary from 'app/containers/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('web-app'),
);
