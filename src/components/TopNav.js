import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toggleSidebar as toggleSidebarAction } from '../actions';
import './TopNav.css';

const TopNav = ({ toggleSidebar }) => (
  <div id="nav-top" className="flex-container">
    <Button
      id="menu-button"
      className="flex-item"
      icon="sidebar"
      circular
      onClick={toggleSidebar}
    />
    <Input
      icon="search"
      className="flex-item"
      placeholder="Search..."
    />
    <Link to="/login" className="flex-item">
      <Button
        className="basic"
      >logout</Button></Link>
  </div>
);

TopNav.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggleSidebarAction, dispatch)
});

export default connect(null, mapDispatchToProps)(TopNav);
