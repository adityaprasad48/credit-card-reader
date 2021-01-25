import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      const { user } = action.payload;
      console.log('addUser');
      state.users.push(user);
    },
  },
});

export const { addUser} = userSlice.actions;
export default userSlice.reducer;


export const selectUser = state => state.user.users

