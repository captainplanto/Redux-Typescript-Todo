import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import InputReducer from "./Todo/TodoSlice";
//import SortingReducer from "./Filter/FilterSlice";
export const store = configureStore({
  reducer: {
    myTodo: InputReducer,
    //filter: SortingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
