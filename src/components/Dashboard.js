import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import './Dashboard.css';

const Dashboard = ({ isToggled }) => (
  <div id="dashboard">
    <div id="main" className={isToggled ? 'toggled' : ''}>
      <TopNav />
      <Segment basic id="content">
        <h2>Dashboard</h2>
        <Inbox />
      </Segment>
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
