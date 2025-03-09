import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

/**
 * Configure and export the Redux store
 */
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    theme: themeReducer,
  },
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 