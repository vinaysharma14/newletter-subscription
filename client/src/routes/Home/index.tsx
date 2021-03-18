import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { Success, SubscriptionForm } from './components';

export const Home: FC = () => {
  const {
    subscriptionSuccess,
  } = useSelector(({ subscriptionReducer }: RootState) => subscriptionReducer);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        {subscriptionSuccess ? <Success /> : <SubscriptionForm />}
      </div>
    </div>
  );
};
