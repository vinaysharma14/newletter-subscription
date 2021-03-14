import { call } from './index';

const subscribe = async (email: string): Promise<Response['json']> => {
  try {
    const successJson = await call('POST', 'newsletter/subscribe', JSON.stringify({ email }));

    return successJson;
  } catch ({ message }) {
    switch (message.split(': ')[1]) {
      case '409':
        throw new Error('emailAlreadySubscribed');

      case '500':
      case '404':
      case 'Failed to fetch':
      default:
        throw new Error('facingTechnicalIssues');
    }
  }
};

const fetchSubscribers = (): Promise<void> => new Promise((resolve) => {
  setTimeout(resolve, 2000);
});

export { subscribe, fetchSubscribers };
