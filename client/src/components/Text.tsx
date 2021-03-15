import { FC, useMemo, ReactNode } from 'react';

import { useMessage } from 'hooks';
import { MessageKey } from 'messages';

interface Props {
  size?: 'xs',
  mt?: number,
  error?: boolean,
  type: 'p' | 'h1',
  text?: MessageKey,
  center?: boolean,
  children? : ReactNode,
  styling?: 'bold' | 'italic',
}

export const Text: FC<Props> = ({
  type,
  text,
  mt = 0,
  styling,
  children,
  size = 'sm',
  error = false,
  center = false,
}) => {
  const message = useMessage(text);

  const fontStyle = useMemo(() => {
    switch (styling) {
      case 'bold':
        return 'font-bold';

      case 'italic':
        return 'italic';

      default:
        return '';
    }
  }, [styling]);

  switch (type) {
    case 'h1':
      return <h1 className={`text-2xl text-primary font-bold mb-1 sm:text-4xl ${center ? 'text-center' : ''}`}>{message}</h1>;

    case 'p':
    default:
      return (
        <p className={`text-${size} ${fontStyle} ${center ? 'text-center' : ''} ${error ? 'text-red-600 mt-2' : ''} mt-${mt}`}>
          {message}
          {children}
        </p>
      );
  }
};
