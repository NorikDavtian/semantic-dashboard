import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from '../components/Admin';
import Dashboard from '../components/Dashboard';
import LoginForm from '../components/Login';
import DevTools from './devTools';

const App = () => (
  <div id="app">
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route exact path="/login" component={LoginForm} />
    </Switch>
    <Route exact path="/admin" component={Admin} />
    <DevTools />
  </div>
);

export default App;
