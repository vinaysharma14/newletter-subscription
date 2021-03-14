import { FC } from 'react';

interface Props {
  email: string;
  topBorder: boolean;
  subscribedAt: string;
}

export const Item: FC<Props> = ({ email, topBorder, subscribedAt }) => (
  <div className={`py-3 flex justify-between border-b border-primary ${topBorder ? 'border-t' : ''}`}>
    <p className="text-sm">{email}</p>
    <p className="text-sm">{subscribedAt}</p>
  </div>
);
