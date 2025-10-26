// this is store for the counter project: Add it in App/Main file to use it
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;