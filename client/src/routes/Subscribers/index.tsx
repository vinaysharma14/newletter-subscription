import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchSubscribersList } from 'store/features';

import { Text } from 'components';
import { Loader } from './components';

export const Subscribers: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubscribersList());
  }, [dispatch]);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text type="h1" text="subscribers" />
        <Text type="p" text="listOfSubscribers" />

        <Loader />

        {/* <div className="mt-7 m-5 max-h-80 overflow-scroll">
          {[...Array(100).keys()].map((key) => (
            <Item
              key={key}
              email="foo@bar.com"
              subscribedAt="12:00"
              topBorder={key === 0}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
