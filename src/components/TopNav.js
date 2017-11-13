import React from 'react';
import { Button, Dropdown, Image, Input, Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { toggleSidebar as toggleSidebarAction } from '../actions';
import './TopNav.css';

const avatar = (<Image src="/assets/images/nan.jpg" avatar />);
const notificationsTrigger = (
  <Button circular className="icon-notification" icon="alarm" />);

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
    <div className="flex-item">
      <Link to="/login">
        <Popup
          trigger={notificationsTrigger}
          content="Hello. This is a mini popup"
          size="mini"
          inverted
        />
      </Link>
      <Dropdown trigger={avatar} pointing="top right">
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
          <Dropdown.Item text="Open..." description="ctrl + o" />
          <Dropdown.Item text="Save as..." description="ctrl + s" />
          <Dropdown.Item text="Rename" description="ctrl + r" />
          <Dropdown.Item text="Make a copy" />
          <Dropdown.Item icon="folder" text="Move to folder" />
          <Dropdown.Item icon="trash" text="Move to trash" />
          <Dropdown.Divider />
          <Dropdown.Item text="Download As..." />
          <Dropdown.Item text="Publish To Web" />
          <Dropdown.Item text="E-mail Collaborators" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </div>
);

TopNav.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggleSidebarAction, dispatch)
});

export default connect(null, mapDispatchToProps)(TopNav);
