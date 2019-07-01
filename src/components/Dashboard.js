import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { home } from '../config';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import './Dashboard.css';
import Email from './Email';


class Dashboard extends Component {
  state = {
    _id: 'Dashboard',
    isSidebarToggled: true
  };

  componentDidMount() {
    const { store } = this.props;
    // @TODO better handle initial state
    store.put(this.state);
    store.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', (change) => {
      if (change.id === 'Sidebar') {
        this.setState({ isSidebarToggled: change.doc.isToggled });
      }
    }).on('error', error => console.error(error));
  }

  render() {
    const { store } = this.props;
    const { isSidebarToggled } = this.state;
    return (
      <div id="dashboard">
        <div id="main" className={isSidebarToggled ? 'toggled' : ''}>
          <TopNav store={store} />
          <Switch>
            <Route exact path={`${home}/`} component={Inbox} store={store} />
            <Route path={`${home}/email/:id`} component={Email} store={store} />
          </Switch>
        </div>
        <Sidebar store={store} />
      </div>
    );
  }
}

export default Dashboard;
