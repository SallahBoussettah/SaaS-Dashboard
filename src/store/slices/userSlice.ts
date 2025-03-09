import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, UserRole } from '../../types/auth';

/**
 * Interface for the user state
 */
interface UserState {
  users: User[];
  selectedUser: User | null;
  isLoading: boolean;
  error: string | null;
}

/**
 * Initial state for the user slice
 */
const initialState: UserState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
};

/**
 * Mock user data
 */
const mockUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    role: UserRole.ADMIN,
    avatar: 'https://i.pravatar.cc/150?img=1',
    createdAt: '2023-01-15T09:30:00Z',
    updatedAt: '2023-04-20T14:20:00Z',
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    role: UserRole.MANAGER,
    avatar: 'https://i.pravatar.cc/150?img=2',
    createdAt: '2023-02-10T10:15:00Z',
    updatedAt: '2023-05-05T11:45:00Z',
  },
  {
    id: '3',
    firstName: 'Robert',
    lastName: 'Johnson',
    email: 'robert.johnson@example.com',
    role: UserRole.USER,
    avatar: 'https://i.pravatar.cc/150?img=3',
    createdAt: '2023-03-05T15:20:00Z',
    updatedAt: '2023-04-25T09:10:00Z',
  },
  {
    id: '4',
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    role: UserRole.USER,
    avatar: 'https://i.pravatar.cc/150?img=4',
    createdAt: '2023-03-20T12:30:00Z',
    updatedAt: '2023-05-10T16:40:00Z',
  },
  {
    id: '5',
    firstName: 'Michael',
    lastName: 'Wilson',
    email: 'michael.wilson@example.com',
    role: UserRole.MANAGER,
    avatar: 'https://i.pravatar.cc/150?img=5',
    createdAt: '2023-01-25T08:45:00Z',
    updatedAt: '2023-04-15T13:15:00Z',
  },
];

/**
 * Async thunk for fetching users
 */
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Return mock users
      return mockUsers;
    } catch (error) {
      return rejectWithValue('Failed to fetch users. Please try again.');
    }
  }
);

/**
 * Async thunk for fetching a single user
 */
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (userId: string, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // Simulating API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Find the user in mock data
      const user = mockUsers.find((u) => u.id === userId);
      
      if (!user) {
        throw new Error('User not found');
      }
      
      return user;
    } catch (error) {
      return rejectWithValue('Failed to fetch user. Please try again.');
    }
  }
);

/**
 * User slice for the Redux store
 */
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
      
    // Fetch user by id
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { selectUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer; 