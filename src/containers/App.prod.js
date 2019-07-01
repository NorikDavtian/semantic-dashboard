import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { home } from '../config';
import Dashboard from '../components/Dashboard';
import LoginForm from '../components/Login';

const App = ({ store }) => (
  <div id="app">
    <Switch>
      <Route exact path={`${home}/login`} component={() => <LoginForm store={store} />} />
      <Route path={`${home}/`} component={() => <Dashboard store={store} />} />
    </Switch>
  </div>
);

export default App;
