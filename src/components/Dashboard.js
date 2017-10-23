import React from 'react';
import { Segment } from 'semantic-ui-react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import './Dashboard.css';

const Dashboard = () => (
  <div id="dashboard">
    <div id="main" className="toggled">
      <TopNav />
      <Segment basic id="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          laudantium, quod. Accusantium, ad amet animi asperiores blanditiis
          delectus doloremque, eos modi odio officiis perferendis quae quam
          repellat, repellendus ut? Natus?</p>
      </Segment>
    </div>
    <Sidebar />
  </div>
);

export default Dashboard;
