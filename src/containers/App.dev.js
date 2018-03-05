import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { home } from '../config';
import Dashboard from '../components/Dashboard';
import LoginForm from '../components/Login';
import DevTools from './devTools';

const App = () => (
  <div id="app">
    <Switch>
      <Route exact path={`${home}/login`} component={LoginForm} />
      <Route path={`${home}/`} component={Dashboard} />
    </Switch>
    <DevTools />
  </div>
);

export default App;
