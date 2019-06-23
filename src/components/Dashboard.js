import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { home } from '../config';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import './Dashboard.css';
import Email from './Email';

const Dashboard = ({ isToggled }) => (
  <div id="dashboard">
    <div id="main" className={isToggled ? 'toggled' : ''}>
      <TopNav />
      <Switch>
        <Route exact path={`${home}/`} component={Inbox} />
        <Route path={`${home}/email/:id`} component={Email} />
      </Switch>
    </div>
    <Sidebar />
  </div>
);

export default Dashboard;
