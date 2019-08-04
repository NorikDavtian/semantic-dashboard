import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';
import './Dashboard.css';

const Dashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div id="dashboard">
      <div id="main" className={isSidebarOpen ? 'open' : ''}>
        <TopNav toggleSidebar={toggleSidebar} />
        <div>{children}</div>
      </div>
      <Sidebar isToggledOpen={isSidebarOpen} />
    </div>
  );
};

export default Dashboard;
