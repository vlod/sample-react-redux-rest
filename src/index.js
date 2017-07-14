/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './config/store';

import { fetchPresidents } from './actions';

// import './index.css';
import registerServiceWorker from './registerServiceWorker';

import routes from './routes';

const store = configureStore();
store.dispatch(fetchPresidents());

const Root = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
