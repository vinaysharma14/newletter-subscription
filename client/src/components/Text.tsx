import { FC } from 'react';

import { useMessage } from 'hooks';
import { MessageKey } from 'messages';

interface Props {
  mt?: number,
  error?: boolean
  type: 'p' | 'h1'
  text: MessageKey
}

export const Text: FC<Props> = ({
  type,
  text,
  mt = 0,
  error = false,
}) => {
  const message = useMessage(text);

  switch (type) {
    case 'h1':
      return <h1 className="text-2xl text-primary font-bold mb-1 sm:text-4xl">{message}</h1>;

    case 'p':
    default:
      return <p className={`text-sm ${error ? 'text-red-600 mt-2' : ''} mt-${mt}`}>{message}</p>;
  }
};
