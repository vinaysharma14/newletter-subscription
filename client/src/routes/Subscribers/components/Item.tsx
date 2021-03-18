import { FC, useMemo } from 'react';

import { Text } from 'components';

interface Props {
  email: string;
  firstItem: boolean;
  subscribedAt: string;
}

export const Item: FC<Props> = ({ email, firstItem, subscribedAt }) => {
  const {
    time,
    date,
    year,
    month,
  } = useMemo(() => {
    const dateObj = new Date(subscribedAt);

    return {
      date: dateObj.getDate(),
      month: dateObj.getMonth(),
      year: dateObj.getFullYear(),
      time: dateObj.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' }),
    };
  }, [subscribedAt]);

  return (
    <div className={`p-3 shadow-custom bg-background rounded ${firstItem ? '' : 'mt-5'}`}>
      <Text type="p" styling="bold" text="email" />
      <Text type="p" styling="italic">{email}</Text>
      <br />

      <Text type="p" styling="bold" text="subscriptionDetails" />
      <Text type="p" text="date" size="xs">{`${date}/${month}/${year}`}</Text>
      <Text type="p" text="time" size="xs">{time}</Text>
    </div>
  );
};
