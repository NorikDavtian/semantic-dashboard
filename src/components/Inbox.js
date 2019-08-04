import React, { useEffect, useState } from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';
import { navigate } from '@reach/router';
import { headers } from '../config/inbox';
import './Inbox.css';

const Inbox = (props) => {
  const { service } = props;
  const [emails, setEmails] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const linkHandler = id => navigate(`/email/${id}`);

  useEffect(() => {
    service(pageNo, setEmails);
  }, [service, pageNo]);

  const renderTableRow = email => (
    <Table.Row
      key={email.id}
      onClick={() => linkHandler(email.id)}
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
        <Table.Footer>
          <Table.Row>
            <Table.Cell> <Button onClick={() => setPageNo(2)}>Page 2</Button></Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
};

export default Inbox;
