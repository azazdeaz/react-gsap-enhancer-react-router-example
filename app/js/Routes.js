'use strict';

import React                       from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import HomePage                    from './pages/HomePage';
import LoginPage                  from './pages/LoginPage';
import NotFoundPage                from './pages/NotFoundPage';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={LoginPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={LoginPage} />
    <Route path="*" component={NotFoundPage} />
  </Router>
);
