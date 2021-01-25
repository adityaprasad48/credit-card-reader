import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listSlice";
import usersReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    list: listReducer,
  },
});

export default store;
