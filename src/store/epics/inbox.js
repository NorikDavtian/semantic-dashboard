import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import { inbox } from '../../api';
import { RECEIVE_FAILURE, RECEIVE_INBOX, REQUEST_INBOX } from '../../actions';

const getInboxEpic = action$ =>
  action$.ofType(REQUEST_INBOX).mergeMap(() =>
    Observable.from(inbox.getEmails()).flatMap(response => [
      {
        type: RECEIVE_INBOX,
        emails: response
      }
    ]).catch(error => Observable.from([
      {
        type: RECEIVE_FAILURE,
        error
      },
      push('/login')
    ]))
  );

export default getInboxEpic;
