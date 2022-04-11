import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  active: ITodoItem[];
}

const initialState: ITodo = {
  input: "",
  isToggle: false,
  todos: [],
  completedItems: [],
  active: [],
};

export const todoSlice = createSlice({
  name: "myTodo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: state.input,
        completed: false,
      };

      state.todos.push(newTodo);
      console.log(newTodo);
    },

    completedTodos: (state, action: PayloadAction<number>) => {
      // const index = state.todos.findIndex(
      //   (todo: { key: any }) => todo.key === action.payload.key
      // );
      // state.todos[index] = action.payload;

      const todo = state.todos.find((item) => item.id === action.payload);

      if (todo) {
        let { completed } = todo;
        completed = !completed;
      }
      // if (todo) {
      //   let { completed } = todo;
      //   if (completed === false) {
      //     completed = true;
      //   } else {
      //     completed = false;
      //   }
      // }
      console.log("item not found");
    },

    filterCompleted: (state) => {
      const completeditem = state.todos.filter(
        (item) => item.completed === true
      );
      state.completedItems = completeditem;
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
  },
});

export const {
  addTodo,
  onInput,
  reset,
  toggle,
  completedTodos,
  filterCompleted,
} = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const todos = (state: RootState) => state.myTodo;

export default todoSlice.reducer;
