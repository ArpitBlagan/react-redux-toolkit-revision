import { configureStore } from "@reduxjs/toolkit";
import counterSlicee from "./slices/counter";
import api from "./slices/api";
export const store = configureStore({
  reducer: {
    counter: counterSlicee,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

//This part is related to ts :-)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
