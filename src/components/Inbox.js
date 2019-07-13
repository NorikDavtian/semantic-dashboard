import React from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { headers } from '../config/inbox';
import './Inbox.css';

const Inbox = (props) => {
  const { emails, emailHandler } = props;
  const renderTableRow = email => (
    <Table.Row
      key={email.id}
      onClick={() => emailHandler(email.id)}
    >
      <Table.Cell>{email.sender}</Table.Cell>
      <Table.Cell>{email.subject}</Table.Cell>
      <Table.Cell>{`${email.text.substring(0, 100)}...`}</Table.Cell>
      <Table.Cell>{email.date}</Table.Cell>
    </Table.Row>
  );

  return (
    <Segment basic id="content">
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
          {emails.map(renderTableRow)}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default Inbox;
