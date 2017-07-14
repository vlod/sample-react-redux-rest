/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from '../reducers';

export default function configureStore(initialState) {
  const middleware = applyMiddleware(reduxThunk);

  const composeEnhancers = (process.env.NODE_ENV === 'development') ?
                            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
  const store = createStore(reducers, initialState, composeEnhancers(middleware));

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
