import React, { Component } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { headers } from '../config/inbox';
import './Inbox.css';

class Inbox extends Component {
  static defaultProps = {
    emails: []
  };

  constructor(props) {
    super(props);
    console.log('props from inbox', props);
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
      <Segment basic id="content">
        <h2>Dashboard</h2>
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
      </Segment>
    );
  }
}

export default Inbox;
