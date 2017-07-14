import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './components/Home';
import Presidents from './components/Presidents';
import President from './components/President';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} name="home" />
    <Route path="/presidents/:id" component={President} />
    <Route path="/presidents" component={Presidents} />
  </Route>
);
