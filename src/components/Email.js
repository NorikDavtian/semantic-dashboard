import React from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { requestEmail, requestInbox } from '../actions';
import './Email.css';

// @todo decide if will fetch data in constructor or via dispatched actions
// constructor (props) {
//   super(props);
//   const id = this.props.location.pathname.substring('/email/'.length);
//   this.props.getEmail(id);
// }

const Email = ({ email }) => (
  <Segment basic id="content">
    <h2><Link to="/">Inbox</Link> / {email.subject}</h2>
    <p><b>Date: </b>{email.date}</p>
    <p><b>From:</b> {email.sender}</p>
    <p>{email.text}</p>
  </Segment>
);

Email.propTypes = {
  // getInbox: PropTypes.func.isRequired,
  // getEmail: PropTypes.func.isRequired,
  email: PropTypes.object
};

Email.defaultProps = {
  email: {}
};

const mapStateToProps = state => ({
  email: state.email.details
});

const mapDispatchToProps = dispatch => ({
  getInbox: bindActionCreators(requestInbox, dispatch),
  getEmail: bindActionCreators(requestEmail, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Email);
