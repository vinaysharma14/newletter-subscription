import { FC, useMemo, ButtonHTMLAttributes } from 'react';

import { useMessage } from 'hooks';
import { MessageKey } from 'messages';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props {
  text: MessageKey
}

export const Button: FC<ButtonProps&Props> = ({
  type,
  text,
  onClick,
  onSubmit,
}) => {
  const message = useMessage(text);
  const isSubmit = useMemo(() => type === 'submit', [type]);

  return (
    <button
      onClick={onClick}
      onSubmit={onSubmit}
      type={isSubmit ? 'submit' : 'button'}
      className="p-2 w-full rounded bg-primary text-background mt-5 focus:ring ring-purple-300 focus:outline-none transition-shadow"
    >
      {message}
    </button>
  );
};
