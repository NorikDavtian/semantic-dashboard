import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Sidebar.css';

class Sidebar extends Component {
  static get name() {
    return 'Sidebar';
  }

  state = {
    _id: Sidebar.name,
    isToggledOpen: true
  };

  async componentWillMount() {
    const { store } = this.props;
    try {
      const storedState = await store.get(Sidebar.name);
      this.setState(storedState);
    } catch (err) {
      await store.put(this.state);
    }
    store.changes({
      since: 'now',
      live: true,
      include_docs: true
    }).on('change', (change) => {
      // change.id contains the doc id, change.doc contains the doc
      if (change.id === Sidebar.name) {
        this.setState(change.doc);
      }
    }).on('error', error => console.error(error));
  }

  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    const { activeItem, isToggledOpen } = this.state || {};

    return (
      <Menu id="sidebar" vertical className={isToggledOpen ? 'open' : ''}>
        <Menu.Item>
          <Menu.Header>Products</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="enterprise"
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="consumer"
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>CMS Solutions</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="rails"
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="python"
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="php"
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="shared"
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="dedicated"
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name="email"
              active={activeItem === 'email'}
              onClick={this.handleItemClick}
            >
              E-mail Support
            </Menu.Item>

            <Menu.Item
              name="faq"
              active={activeItem === 'faq'}
              onClick={this.handleItemClick}
            >
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sidebar;
