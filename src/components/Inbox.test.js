import React from 'react';
import Inbox from './Inbox';
import { render } from '../../test';

it('renders without crashing', () => {
  render(<Inbox />);
});
