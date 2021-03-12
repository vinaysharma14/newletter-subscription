import { FC } from 'react';

interface Props {
  text: string
  type: 'p' | 'h1'
}

export const Text: FC<Props> = ({ type, text }) => {
  switch (type) {
    case 'h1':
      return <h1 className="text-2xl text-primary font-bold mb-1 sm:text-4xl">{text}</h1>;

    case 'p':
    default:
      return <p>{text}</p>;
  }
};
