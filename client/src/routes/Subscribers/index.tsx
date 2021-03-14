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

        <Loader />

        {!fetching && (
        <div className="mt-7 m-5 max-h-80 overflow-scroll">
          {fetchError && <Text center type="p" error text={fetchError} />}

          {subscribers.length ? subscribers.map((key) => (
            <Item
              key={key}
              email="foo@bar.com"
              subscribedAt="12:00"
              topBorder={key === 0}
            />
          )) : null}
        </div>
        )}
      </div>
    </div>
  );
};
