
import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./Slices/theme.slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  }
});