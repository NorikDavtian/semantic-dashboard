import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LoginForm from '../components/Login';

const App = ({ store }) => (
  <div id="app">
    <Switch>
      <Route exact path={'/login'} component={() => <LoginForm store={store} />} />
      <Route path={'/'} component={() => <Dashboard store={store} />} />
    </Switch>
  </div>
);

export default App;
