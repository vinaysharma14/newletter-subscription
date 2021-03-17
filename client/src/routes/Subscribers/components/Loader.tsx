import { FC } from 'react';

import { LOADING_COUNT } from 'utils';

export const Loader: FC = () => (
  <>
    {[...Array(LOADING_COUNT).keys()].map((key, i) => (
      <div key={key} className={`p-3 shadow-custom bg-background rounded ${i === 0 ? '' : 'mt-5'}`}>
        <div className="h-3 w-10 bg-purple-300 mb-1" />
        <div className="h-3 w-36 bg-purple-200" />
        <br />
        <div className="h-3 w-32 bg-purple-300 mb-1" />
        <div className="h-3 w-20 bg-purple-200 mb-1" />
        <div className="h-3 w-20 bg-purple-200" />
      </div>
    ))}
  </>
);
