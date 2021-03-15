import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Text, Button } from 'components';

export const Success: FC = () => (
  <>
    <Text type="h1" text="thankYou" />
    <Text type="p" text="subscribedSuccessfully" />

    <Link to="/subscribers">
      <Button type="submit" text="viewAllSubscribers" />
    </Link>
  </>
);
