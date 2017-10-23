import React from 'react';
import Dashboard from './Dashboard';
import { render } from '../../test';

it('renders without crashing', () => {
  render(<Dashboard />);
});
