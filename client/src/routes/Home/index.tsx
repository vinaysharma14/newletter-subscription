import { FC } from 'react';

import { Text, Input } from 'components';

import './styles.css';

export const Home: FC = () => (
  <div className="h-screen flex flex-col flex-1 justify-center items-center p-8">
    <div className="p-7 bg-background shadow-custom rounded sm:p-10">
      <Text type="h1" text="Subscribe to our Newsletter" />
      <Text type="p" text="Stay upto date with our latest new and products." />

      <div className="mt-5">
        <Input placeholder="Enter your email here" />
      </div>
    </div>
  </div>
);
