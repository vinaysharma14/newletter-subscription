import { FormValues } from 'routes/Home/components';
import { Subscriber } from 'store/features';
import { call } from './index';

const subscribe = async (formValues: FormValues): Promise<Response['json']> => {
  try {
    const successJson = await call('POST', 'newsletter/subscribe', JSON.stringify(formValues));

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

const fetchSubscribers = async (): Promise<Subscriber[]> => {
  try {
    const { subscribers } = await call('GET', 'newsletter/get-subscribers', undefined) as unknown as { subscribers: Subscriber[] };

    return subscribers;
  } catch ({ message }) {
    switch (message.split(': ')[1]) {
      case '500':
      case '404':
      case 'Failed to fetch':
      default:
        throw new Error('facingTechnicalIssues');
    }
  }
};

export { subscribe, fetchSubscribers };
