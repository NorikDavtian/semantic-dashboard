import React from 'react';
import Sidebar from './Sidebar';
import { render } from '../../test';

it('renders without crashing', () => {
  render(<Sidebar />);
});
