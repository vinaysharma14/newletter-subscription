import { FC, useMemo } from 'react';

interface Props {
  email: string;
  topBorder: boolean;
  subscribedAt: string;
}

export const Item: FC<Props> = ({ email, topBorder, subscribedAt }) => {
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
    <div className={`py-3 border-b border-primary ${topBorder ? 'border-t' : ''}`}>
      <p className="text-sm">{`Email: ${email}`}</p>
      <br />
      <p className="text-sm">{`Subscribed Date: ${date}/${month}/${year}`}</p>
      <p className="text-sm">{`Subscription Time: ${time}`}</p>
    </div>
  );
};
