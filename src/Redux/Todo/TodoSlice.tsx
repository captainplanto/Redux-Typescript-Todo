import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
  cleared: boolean;
}

interface ITodo {
  input: string;
  isToggle: boolean;
  todos: ITodoItem[];
  completedItems: ITodoItem[];
  activeItems: ITodoItem[];
  clearCompleted: ITodoItem[];
  deletedItems: ITodoItem[];
  tabIndex: number;
  cleared: boolean;
}

const initialState: ITodo = {
  input: "",
  isToggle: false,
  todos: [],
  completedItems: [],
  activeItems: [],
  clearCompleted: [],
  deletedItems: [],
  tabIndex: 1,
  cleared: false,
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
        cleared: false,
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
        todo.completed = !todo.completed;
      }
    },
    activeFilter: (state) => {
      const activeItem = state.todos.filter((item) => item.completed === false);
      state.activeItems = activeItem;
    },
    completedFilter: (state) => {
      const completeditem = state.todos.filter(
        (item) => item.completed === true
      );
      state.completedItems = completeditem;
    },

    // The two functions below handles in delete items and tabIndex;

    deleteTodo: (state, action: PayloadAction<number>) => {
      const deletedIndex = state.todos.filter((item) => item.id !== action.payload);
      state.todos = deletedIndex;
    },

    clearCompletedFilter: (state) => {
      const findDeletedItem = state.todos.filter(
        (item) => item.cleared === true
      );
      state.clearCompleted = findDeletedItem;
      console.log(state.clearCompleted);
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
