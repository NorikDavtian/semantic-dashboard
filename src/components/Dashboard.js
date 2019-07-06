import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import Inbox from './Inbox';
import './Dashboard.css';
import Email from './Email';


class Dashboard extends Component {
  static get name() {
    return 'Dashboard';
  }

  state = {
    _id: Dashboard.name,
    isSidebarToggledOpen: true
  };

  async componentWillMount() {
    const { store } = this.props;
    let storedState;
    try {
      storedState = await store.get(Dashboard.name);
      if (storedState) {
        this.setState(storedState);
      }
    } catch (_err) {
      await store.put(this.state);
    }
    store.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', (change) => {
      if (change.id === 'Sidebar') {
        const updatedState = { isSidebarToggledOpen: change.doc.isToggledOpen };
        this.updateState(store, updatedState);
      }
    }).on('error', error => console.error(error));
  }

  updateState = async (store, updatedState) => {
    this.setState(updatedState);
    const doc = await store.get(Dashboard.name);
    store.put(Object.assign(doc, updatedState));
  };

  render() {
    const { store } = this.props;
    const { isSidebarToggledOpen } = this.state;
    return (
      <div id="dashboard">
        <div id="main" className={isSidebarToggledOpen ? 'open' : ''}>
          <TopNav store={store} />
          <Switch>
            <Route exact path={'/'} component={() => <Inbox store={store} />} />
            <Route path={'/email/:id'} component={() => <Email store={store} />} />
          </Switch>
        </div>
        <Sidebar store={store} />
      </div>
    );
  }
}

export default Dashboard;
