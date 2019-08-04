import { camelizeKeys } from 'humps';
import { baseUrl } from '../config/api';

export const getEmails = async (pageNo = 1) => {
  const response = await fetch(`${baseUrl}/api/inbox?page=${pageNo}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    const body = await response.json();
    // console.log('response: ', body);
    const res = camelizeKeys(body)
    console.log('RES: ', res);

    return camelizeKeys(body);
  }
  throw new Error('Can not fetch emails');
};


export default {};
