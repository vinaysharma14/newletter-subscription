import { FC } from 'react';

interface Props {
  text: string
  error?: boolean
  type: 'p' | 'h1'
}

export const Text: FC<Props> = ({ type, text, error = false }) => {
  switch (type) {
    case 'h1':
      return <h1 className="text-2xl text-primary font-bold mb-1 sm:text-4xl">{text}</h1>;

    case 'p':
    default:
      return <p className={`text-sm ${error ? 'text-red-600 mt-2' : ''}`}>{text}</p>;
  }
};
