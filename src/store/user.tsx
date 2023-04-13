import {createSlice} from '@reduxjs/toolkit';

export type UserParams = {
  authToken: string;
};

const initialState: UserParams = {
  authToken: '',
};

export const userSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.authToken = action.payload;
    },
    userInitialState: () => {
      return initialState;
    },
  },
});

export const {setToken, userInitialState} = userSlice.actions;
export default userSlice.reducer;
