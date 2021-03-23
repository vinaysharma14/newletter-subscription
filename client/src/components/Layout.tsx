import {
  FC,
  useMemo,
  ReactNode,
  useCallback,
} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { MessageKey, MESSAGES } from 'messages';
import { toggleTheme } from 'store/features/ui/theme';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(({ themeReducer }: RootState) => themeReducer);

  const clickHander = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const messageKey = useMemo((): MessageKey => (isDarkMode ? 'toggleToLight' : 'toggleToDark'), [isDarkMode]);

  return (
    <div className={isDarkMode ? 'bg-black' : 'bg-background'}>
      <button className={isDarkMode ? 'text-white' : 'text-black'} type="button" onClick={clickHander}>
        {MESSAGES[messageKey]}
      </button>
      {children}
    </div>
  );
};
