import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
});

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
