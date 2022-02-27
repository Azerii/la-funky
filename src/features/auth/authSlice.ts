import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface AuthState {
  user: User | null;
  token: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: null,
  token: ''
};

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User>): void => {
      state.user = action.payload;
    },
    setToken: (state: AuthState, action: PayloadAction<string>): void => {
      state.token = action.payload;
    }
  }
});

export const { setUser, setToken } = authSlice.actions;

export default authSlice.reducer;
