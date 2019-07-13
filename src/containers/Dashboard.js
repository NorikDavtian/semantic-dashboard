import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Sidebar from '../components/Sidebar';
import Inbox from '../components/Inbox';
import './Dashboard.css';
import Email from '../components/Email';


const Dashboard = ({ store }) => {
  // async componentWillMount() {
  //   try {
  //     storedState = await store.get(Dashboard.name);
  //     if (storedState) {
  //       this.setState(storedState);
  //     }
  //   } catch (_err) {
  //     await store.put(this.state);
  //   }
  //   store.changes({
  //     since: 'now',
  //     live: true,
  //     include_docs: true
  //   }).on('change', (change) => {
  //     if (change.id === 'Sidebar') {
  //       const updatedState = { isSidebarToggledOpen: change.doc.isToggledOpen };
  //       this.updateState(store, updatedState);
  //     }
  //   }).on('error', error => console.error(error));
  // }
  //
  // updateState = async (store, updatedState) => {
  //   this.setState(updatedState);
  //   const doc = await store.get(Dashboard.name);
  //   store.put(Object.assign(doc, updatedState));
  // };

  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const data = await store.API.inbox.getEmails();
        setEmails(data);
      } catch (_err) {
        setError('Cannot fetch inbox emails');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [store]);

  // No unused vars for now
  console.log('setEmail', setEmail);
  console.log('error', error);
  console.log('isLoading', isLoading);

  const emailHandler = id => store.history.push({
    pathname: `/email/${id}`,
    state: { fromInbox: true }
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div id="dashboard">
      <div id="main" className={isSidebarOpen ? 'open' : ''}>
        <TopNav toggleSidebar={toggleSidebar} />
        <Switch>
          <Route exact path={'/'} component={() => <Inbox emailHandler={emailHandler} emails={emails} />} />
          <Route path={'/email/:id'} component={() => <Email email={email} />} />
        </Switch>
      </div>
      <Sidebar isToggledOpen={isSidebarOpen} />
    </div>
  );
};

export default Dashboard;
