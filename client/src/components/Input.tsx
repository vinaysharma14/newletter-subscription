import { forwardRef, HTMLProps, useMemo } from 'react';
import { LiteralUnion, RegisterOptions } from 'react-hook-form';

import { ERRORS, ErrorKey } from 'errors';

type IProps = HTMLProps<HTMLInputElement>;

interface Props {
  error?: LiteralUnion<keyof RegisterOptions, string>
}

export const Input = forwardRef<HTMLInputElement, Props & IProps>((
  { name, placeholder, error },
  ref,
) => {
  const err = useMemo((): ErrorKey | undefined => {
    if (error && name) {
      return ERRORS[name][error];
    }

    return undefined;
  }, [name, error]);

  return (
    <>
      <input
        ref={ref}
        name={name}
        placeholder={placeholder}
        className="p-2 m-2 text-sm w-full rounded border border-primary text-primary bg-background focus:ring ring-purple-300 focus:outline-none transition-shadow"
      />

      {err && <p className="text-sm text-red-600 mt-2">{err}</p>}
    </>
  );
});
