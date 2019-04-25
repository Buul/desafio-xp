import { logout } from './auth';

const logoutTokenExpired = () => {
  logout();
  window.location.reload();
};

export const formatMessage = error => {
  const {
    response: {
      data: {
        error: { message },
      },
    },
  } = error;
  switch (message) {
    case 'The access token expired':
      logoutTokenExpired();
      return 'Tempo de login expirado, refaça o login';
    default:
      return message;
  }
};

export default formatMessage;
