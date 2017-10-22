import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = () => (
  <div id="nav-top" className="flex-container">
    <Button id="menu-button" circular icon="sidebar" className="flex-item" />
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

export default TopNav;
