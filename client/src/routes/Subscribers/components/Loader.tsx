import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'store';
import { Spinner, Text } from 'components';

export const Loader: FC = () => {
  const { fetching } = useSelector(({ subscribersReducer }: RootState) => subscribersReducer);

  return (
    <>
      {fetching && (
      <div className="mt-7 flex flex-col justify-center items-center">
        <Spinner size="md" invert />
        <Text type="p" text="loading" mt={2} />
      </div>
      )}
    </>
  );
};
