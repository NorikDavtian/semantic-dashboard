import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Email.css';
import { home } from '../config';

// @todo decide if will fetch data in constructor or via dispatched actions
// constructor (props) {
//   super(props);
//   const id = this.props.location.pathname.substring('/email/'.length);
//   this.props.getEmail(id);
// }

const Email = ({ email }) => (
  <Segment basic id="content">
    <h2><Link to={`${home}/`}>Inbox</Link> / {email.subject}</h2>
    <p><b>Date: </b>{email.date}</p>
    <p><b>From:</b> {email.sender}</p>
    <p>{email.text}</p>
  </Segment>
);

export default Email;
