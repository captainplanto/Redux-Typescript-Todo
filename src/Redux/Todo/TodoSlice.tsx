import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4, v4 } from "uuid";
interface ITodo {
  input: string;
  isToggle: boolean;
  todos: any;
}

const initialState: ITodo = {
  input: "",
  isToggle: false,
  todos: [
    //  { id: 1, title: "todo1", completed: false },
    // { id: 2, title: "todo2", completed: true },
  ],
};

export const todoSlice = createSlice({
  name: "myTodo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        key: Date.now(),
        title: state.input,
        completed: false,
      };

      state.todos.push(newTodo);
      console.log(newTodo);
    },

    completedTodos: (state, action) => {
      const index = state.todos.findIndex(
        (todo: { key: any }) => todo.key === action.payload.key
      );
      state.todos[index] = action.payload;
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
export const { addTodo, onInput, reset, toggle, completedTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
