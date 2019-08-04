import React from 'react';
import { Segment } from 'semantic-ui-react';
import { Link } from '@reach/router';

const NotFound = () => (
  <Segment basic id="content">
    <h2>Have a 404</h2>
    <p><Link to="/">Go to Home</Link></p>
  </Segment>
);

export default NotFound;
