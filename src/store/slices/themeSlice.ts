import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Theme mode type
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Interface for the theme state
 */
interface ThemeState {
  mode: ThemeMode;
}

/**
 * Initial state for the theme slice
 */
const initialState: ThemeState = {
  mode: 'light',
};

/**
 * Theme slice for the Redux store
 */
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
    toggleThemeMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setThemeMode, toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer; 