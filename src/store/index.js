import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./modules/counter/counter.slice"

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
});
