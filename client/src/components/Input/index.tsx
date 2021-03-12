import { FC } from 'react';

interface Props {
  placeholder: string
}

export const Input: FC<Props> = ({ placeholder }) => (
  <input className="p-2 w-full rounded border border-primary text-primary bg-background focus:ring ring-purple-300 focus:outline-none transition-shadow" placeholder={placeholder} />
);
