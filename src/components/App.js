import React from 'react';
import { Route } from 'react-router-dom';
import HomepageLayout from './HomepageLayout';
import LoginForm from './LoginForm';
import './App.css';

const App = () => (
  <div className="App">
    <Route exact path="/" component={HomepageLayout} />
    <Route exact path="/login" component={LoginForm} />
  </div>
);

export default App;
