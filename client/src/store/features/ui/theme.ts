import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from 'store';

interface ThemeState {
  isDarkMode: boolean
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state: ThemeState, { payload }: PayloadAction<{ isDarkMode: boolean }>) => {
      state.isDarkMode = payload.isDarkMode;
    },
  },
});

export const themeReducer = themeSlice.reducer;
const { setTheme } = themeSlice.actions;

const toggleTheme = (): AppThunk => async (dispatch, state) => {
  const { themeReducer: { isDarkMode } } = state();

  dispatch(setTheme({ isDarkMode: !isDarkMode }));
};

export { toggleTheme };
