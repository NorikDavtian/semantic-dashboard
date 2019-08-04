import React from 'react';
import { Router } from '@reach/router';
import NotFound from '../components/NotFound';
import Dashboard from './Dashboard';
import LoginForm from '../components/Login';
import Inbox from '../components/Inbox';
import inboxService from '../services/inbox';
import Email from '../components/Email';
import emailService from '../services/email';

const App = ({ store }) => {
  console.log(store);
  return (
    <Router id="app">
      <LoginForm path="/login" />
      <Dashboard path="/">
        <NotFound default />
        <Inbox exact path="/" service={inboxService(store)} />
        <Email path="email/:emailId" service={emailService(store)} />
      </Dashboard>
    </Router>
  );
};

export default App;
