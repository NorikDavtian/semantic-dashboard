import React from 'react';
import { Route } from 'react-router-dom';
import Admin from '../components/Admin';
import HomepageLayout from '../components/HomepageLayout';
import LoginForm from '../components/LoginForm';

const App = () => (
  <div className="App">
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/login" component={LoginForm} />
  </div>
);

export default App;
