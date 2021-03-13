import { FC, useMemo, ButtonHTMLAttributes } from 'react';

import { useMessage } from 'hooks';
import { MessageKey } from 'messages';

import { Spinner } from './Spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props {
  text: MessageKey
  loading?: boolean
}

export const Button: FC<ButtonProps&Props> = ({
  type,
  text,
  onClick,
  onSubmit,
  disabled,
  loading = false,
}) => {
  const message = useMessage(text);
  const isSubmit = useMemo(() => type === 'submit', [type]);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onSubmit={onSubmit}
      type={isSubmit ? 'submit' : 'button'}
      className="p-2 w-full text-sm flex justify-center items-center rounded bg-primary text-background mt-5 focus:ring ring-purple-300 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-wait"
    >
      {message}
      {loading && <Spinner />}
    </button>
  );
};
