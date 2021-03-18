import { FC, useMemo } from 'react';

interface Props {
  invert?: boolean,
  size: 'sm' | 'md',
}

export const Spinner: FC<Props> = ({ size, invert = false }) => {
  const {
    dimension,
    borderWidth,
    borderColor,
    borderTopColor,
  } = useMemo(() => ({
    borderWidth: `border${size === 'sm' ? '' : '-2'}`,
    borderColor: `border-${invert ? 'background' : 'primary'}`,
    borderTopColor: `border-t-${!invert ? 'background' : 'primary'}`,
    dimension: `h-${size === 'sm' ? 4 : 7} w-${size === 'sm' ? 4 : 7}`,
  }), [size, invert]);

  return <div className={`ml-2 rounded-full animate-spin ${dimension} ${borderWidth} ${borderColor} ${borderTopColor}`} />;
};
