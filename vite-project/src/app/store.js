import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userSlice";

export const store = configureStore({
  reducer: {
    app: userDetail,
  },
});
