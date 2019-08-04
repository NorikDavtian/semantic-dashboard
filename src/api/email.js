import { camelizeKeys } from 'humps';
import { baseUrl } from '../config/api';

export const getEmail = async (emailId) => {
  console.log('emailId', emailId);
  const response = await fetch(`${baseUrl}/api/email/${emailId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    const body = await response.json();
    return camelizeKeys(body);
  }
  throw new Error('Can not fetch email.');
};

export default {};
