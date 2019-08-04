import { baseUrl } from './api';

it('config exports baseUrl given env variable API_URL', () => {
  expect(baseUrl).toBe(process.env.API_URL);
});
