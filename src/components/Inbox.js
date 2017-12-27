import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { requestEmail, requestInbox } from '../actions';
import { headers } from '../config/inbox';
import './Inbox.css';

class Inbox extends Component {
  static propTypes = {
    getInbox: PropTypes.func.isRequired,
    getEmail: PropTypes.func.isRequired,
    emails: PropTypes.array
  };

  static defaultProps = {
    emails: []
  };

  constructor(props) {
    super(props);
    this.props.getInbox();
  }

  renderTableRow = email => (
    <Table.Row
      key={email.id}
      onClick={() => this.props.getEmail({ id: email.id })}
    >
      <Table.Cell>{email.sender}</Table.Cell>
      <Table.Cell>{email.subject}</Table.Cell>
      <Table.Cell>{`${email.text.substring(0, 100)}...`}</Table.Cell>
      <Table.Cell>{email.date}</Table.Cell>
    </Table.Row>
  );

  render() {
    const { emails } = this.props;
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            {
              headers.map(
                header => (
                  <Table.HeaderCell key={header}>{header}</Table.HeaderCell>))
            }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {emails.map(this.renderTableRow)}
        </Table.Body>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  emails: state.inbox.emails
});

const mapDispatchToProps = dispatch => ({
  getInbox: bindActionCreators(requestInbox, dispatch),
  getEmail: bindActionCreators(requestEmail, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
