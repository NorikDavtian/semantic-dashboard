import React from 'react';
import { Route } from 'react-router-dom';
import Admin from '../components/Admin';
import HomepageLayout from '../components/HomepageLayout';
import LoginForm from '../components/LoginForm';
import DevTools from './devTools';

const App = () => (
  <div className="App">
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/login" component={LoginForm} />
    <DevTools />
  </div>
);

export default App;
