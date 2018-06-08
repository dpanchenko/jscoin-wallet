import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'app/redux/store';

import Routes from 'app/routes';
import ErrorBoundary from 'app/containers/ErrorBoundary';

// import 'app/styles/app.less';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </Provider>,
  document.getElementById('web-app'),
);
