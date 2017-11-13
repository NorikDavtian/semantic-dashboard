import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = ({ isToggled }) => (
  <div id="dashboard">
    <div id="main" className={isToggled ? 'toggled' : ''}>
      <TopNav />
      <Segment basic id="content">
        <h2>Dashboard</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          laudantium, quod. Accusantium, ad amet animi asperiores blanditiis
          delectus doloremque, eos modi odio officiis perferendis quae quam
          repellat, repellendus ut? Natus?</p>
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
