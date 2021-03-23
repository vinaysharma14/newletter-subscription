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

  // cache the theme in local storage
  await localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));

  dispatch(setTheme({ isDarkMode: !isDarkMode }));
};

const rehydrateTheme = (): AppThunk => async (dispatch) => {
  try {
    // extract the cached the theme from local storage
    const isDarkMode = await localStorage.getItem('isDarkMode');

    dispatch(setTheme({ isDarkMode: isDarkMode === 'true' }));
  } catch (error) {
    dispatch(setTheme({ isDarkMode: false }));
  }
};

export { toggleTheme, rehydrateTheme };
