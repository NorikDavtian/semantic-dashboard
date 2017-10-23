import React from 'react';
import Login from './Login';
import { render } from '../../test';

it('renders without crashing', () => {
  render(<Login />);
});
