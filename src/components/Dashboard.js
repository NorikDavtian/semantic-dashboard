import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

Dashboard.propTypes = {
  isToggled: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isToggled: state.isSidebarToggled
});

export default connect(mapStateToProps)(Dashboard);
