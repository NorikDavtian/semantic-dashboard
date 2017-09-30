import { baseUrl } from './api';

it('config exports baseUrl given env variable REACT_APP_API_URL', () => {
  expect(baseUrl).toBe(process.env.REACT_APP_API_URL);
});
