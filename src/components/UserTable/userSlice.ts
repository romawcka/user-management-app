import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, IUserState } from '../../types';

const url = import.meta.env.VITE_USER_URI;

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<IUser[]>(url);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { setFilter } = userSlice.actions;

export default userSlice.reducer;
