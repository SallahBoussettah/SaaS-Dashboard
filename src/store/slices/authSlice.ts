import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, LoginCredentials, RegisterCredentials, User } from '../../types/auth';

/**
 * Initial state for the auth slice
 */
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

/**
 * Helper function to save auth state to localStorage
 */
const saveAuthState = (user: User, token: string) => {
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('token', token);
};

/**
 * Helper function to clear auth state from localStorage
 */
const clearAuthState = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

/**
 * Async thunk for user login
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful login response
      const user = {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: credentials.email,
        role: 'admin',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as User;
      const token = 'mock-jwt-token';
      
      // Save to localStorage with extended expiration if rememberMe is true
      // In a real app, you might use a longer-lasting token or refresh token mechanism
      // For this mock implementation, we're just saving to localStorage
      saveAuthState(user, token);
      
      return { 
        user, 
        token,
        // Pass rememberMe flag through to the fulfilled action
        rememberMe: credentials.rememberMe
      };
    } catch (error) {
      return rejectWithValue('Login failed. Please check your credentials.');
    }
  }
);

/**
 * Async thunk for user registration
 */
export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterCredentials, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Mock successful registration response
      const user = {
        id: '1',
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as User;
      const token = 'mock-jwt-token';
      
      // Save to localStorage
      saveAuthState(user, token);
      
      return { user, token };
    } catch (error) {
      return rejectWithValue('Registration failed. Please try again.');
    }
  }
);

/**
 * Auth slice for the Redux store
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      
      // Clear localStorage
      clearAuthState();
    },
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      
      // Save to localStorage
      saveAuthState(action.payload.user, action.payload.token);
    },
  },
  extraReducers: (builder) => {
    // Login
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
      
    // Register
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer; 