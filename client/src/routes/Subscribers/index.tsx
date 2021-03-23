import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSubscribersList } from 'store/features';

import { RootState } from 'store';

import { Text } from 'components';
import { Item, Loader } from './components';

export const Subscribers: FC = () => {
  const dispatch = useDispatch();

  const {
    fetching,
    fetchError,
    subscribers,
  } = useSelector(({ subscribersReducer }: RootState) => subscribersReducer);

  useEffect(() => {
    dispatch(fetchSubscribersList());
  }, [dispatch]);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text center type="h1" text="subscribers" />
        <Text center type="p" text="listOfSubscribers" />

        <div className="p-1 mt-7 max-h-80 overflow-scroll">
          {fetching && <Loader />}

          {fetchError && <Text center type="p" error text={fetchError} />}

          {subscribers.length ? subscribers.map(({ age, email, subscribedAt }, index) => (
            <Item
              age={age}
              key={email}
              email={email}
              firstItem={index === 0}
              subscribedAt={subscribedAt}
            />
          )) : null}
        </div>
      </div>
    </div>
  );
};
