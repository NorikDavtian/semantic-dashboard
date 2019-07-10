import React, { useEffect, useState } from 'react';
import { Segment, Table } from 'semantic-ui-react';
import { headers } from '../config/inbox';
import './Inbox.css';

const Inbox = ({ store }) => {
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const data = await store.API.inbox.getEmails();
        setEmails(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [store]);

  const renderTableRow = email => (
    <Table.Row
      key={email.id}
      onClick={() => store.history.push({
        pathname: `/email/${email.id}`,
        state: { fromInbox: true }
      })}
    >
      <Table.Cell>{email.sender}</Table.Cell>
      <Table.Cell>{email.subject}</Table.Cell>
      <Table.Cell>{`${email.text.substring(0, 100)}...`}</Table.Cell>
      <Table.Cell>{email.date}</Table.Cell>
    </Table.Row>
  );

  return isLoading ? (<div>Loading...</div>) : (
    <Segment basic id="content">
      {isError && <div className={'error'}>Something went wrong ...</div>}
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
