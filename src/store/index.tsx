import { configureStore } from "@reduxjs/toolkit";
import animaçõesReducer from "./reducers/animações";

export const store = configureStore({
  reducer: {
    animações: animaçõesReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
