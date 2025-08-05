import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counterSlice";
import user from "./features/userSlice";

export default configureStore({
  reducer: {
    counter,
    user,
    // wishlist,
    // cart
  },
});
