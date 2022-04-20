import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iteratorSymbol } from "immer/dist/internal";

import { RootState } from "../store";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

interface ITodo {
  input: string;
  isToggle: boolean;
  todos: ITodoItem[];
  completedItems: ITodoItem[];
  activeItems: ITodoItem[];
  clearCompleted: ITodoItem[];
  tabIndex: number;
  
}

const initialState: ITodo = {
  input: "",
  isToggle: false,
  todos: [],
  completedItems: [],
  activeItems: [],
  clearCompleted: [],
  tabIndex: 1,
};

export const todoSlice = createSlice({
  name: "myTodo",
  initialState,
  reducers: {
    // The reducer Function for th TodoLists begin here:

    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: state.input,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    onInput: (
      state,
      action: PayloadAction<
        React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      >
    ) => {
      state.input = action.payload.target.value;
    },
    reset: (state) => {
      state.input = "";
    },

    toggle: (state, action: PayloadAction<boolean>) => {
      state.isToggle = action.payload;
    },

    //The reducer function for the FilterComponents begins here:

    completedTodos: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
<<<<<<< Updated upstream
        todo.completed = !todo?.completed;
      }
      console.log("item not found");
=======
        todo.completed = !todo.completed;
      }
>>>>>>> Stashed changes
    },

    completedFilter: (state) => {
      const completeditem = state.todos.filter(
        (item) => item.completed === true
      );
      state.completedItems = completeditem;
    },

    activeFilter: (state) => {
      const activeItem = state.todos.filter((item) => item.completed === false);
      state.activeItems = activeItem;
    },
    // The two functions below handles in delete items and clearCompletedFilter items

    deleteTodo: (state, action: PayloadAction<number>) => {
      const deletedIndex = state.todos.filter(
        (item) => item.id !== action.payload
      );

      state.todos = deletedIndex;
    },

    clearCompletedFilter: (state) => {
      const removedItem = state.todos.filter((item) => item.completed === true);
      state.clearCompleted = removedItem;

      console.log(removedItem);
    },

    tabIndex: (state, action: PayloadAction<number>) => {
      state.tabIndex = action.payload;
    },
  },
});

export const {
  addTodo,
  onInput,
  reset,
  toggle,
  completedTodos,
  clearCompletedFilter,
  completedFilter,
  activeFilter,
  deleteTodo,
  tabIndex,
} = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const todos = (state: RootState) => state.myTodo;

export default todoSlice.reducer;
