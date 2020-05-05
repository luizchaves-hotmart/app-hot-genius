import Request from '@hotmart/request';
import settings from 'app/settings';
import { USER_REQUEST_IDENTIFIERS } from './user.constants';

const baseRequest = '/v1/security/user';
Request.register(settings.api.databox, {
  post: {
    [USER_REQUEST_IDENTIFIERS.READ_USER]: `${baseRequest}/:id`,
    [USER_REQUEST_IDENTIFIERS.SEARCH_USER]: `${baseRequest}/like`
  }
});
