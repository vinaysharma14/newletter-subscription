import { forwardRef, HTMLProps } from 'react';

type Props = HTMLProps<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(({ name, placeholder }, ref) => (
  <input
    ref={ref}
    name={name}
    placeholder={placeholder}
    className="p-2 w-full rounded border border-primary text-primary bg-background focus:ring ring-purple-300 focus:outline-none transition-shadow"
  />
));
