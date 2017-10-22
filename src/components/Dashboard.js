import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'semantic-ui-react';
import './Dashboard.css';

const Dashboard = () => (
  <Container id="dashboard">
    <Link to="/login"><Button>Logout</Button></Link>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
      laudantium, quod. Accusantium, ad amet animi asperiores blanditiis
      delectus doloremque, eos modi odio officiis perferendis quae quam
      repellat, repellendus ut? Natus?</p>
  </Container>
);

export default Dashboard;
