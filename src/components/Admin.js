import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import './Admin.css';

const Admin = () => (
  <Container id="admin">
    <Link to="/"><Button>Back to Home</Button></Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
      laudantium, quod. Accusantium, ad amet animi asperiores blanditiis
      delectus doloremque, eos modi odio officiis perferendis quae quam
      repellat, repellendus ut? Natus?</p>
  </Container>
);

export default Admin;
