import { FC, useEffect } from 'react';

import { Text } from 'components';
import { Item } from './components';

export const Subscribers: FC = () => {
  useEffect(() => {
    // TODO: dispatch action to fetch subscribers
  }, []);

  return (
    <div className="h-screen flex fle\x-col flex-1 justify-center items-center p-8">
      <div className="p-7 bg-background shadow-custom rounded sm:p-10">
        <Text type="h1" text="subscribers" />
        <Text type="p" text="listOfSubscribers" />

        <div className="mt-7 m-5 max-h-80 overflow-scroll">
          {[...Array(100).keys()].map((key) => (
            <Item
              key={key}
              email="foo@bar.com"
              subscribedAt="12:00"
              topBorder={key === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
