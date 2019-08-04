import React, { useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from '@reach/router';
import './Email.css';

const Email = (props) => {
  const { service, emailId } = props;
  const [email, setEmail] = useState({});

  useEffect(() => {
    service(emailId, setEmail);
  }, [service, emailId]);

  return (
    <Segment basic id="content">
      <h2><Link to={'/'}>Inbox</Link> / {email.subject}</h2>
      <p><b>Date: </b>{email.date}</p>
      <p><b>From:</b> {email.sender}</p>
      <p>{email.text}</p>
    </Segment>
  );
};

export default Email;
