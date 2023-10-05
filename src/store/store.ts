import {
  configureStore,
  createListenerMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";
import dataReducer from "./data-slice";
import { uiMiddleware } from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiReducer, data: dataReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(uiMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
