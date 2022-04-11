import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { addTodo, onInput, reset } from "../Redux/Todo/TodoSlice";
import { useState } from "react";

interface IStyle {
  IToggle?: boolean;
}

const TodoInputComponent = () => {
  const todoInput = useAppSelector((state) => state.myTodo.input);
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    todoInput.length < 1 ? e.preventDefault() : dispatch(addTodo(todoInput));

    dispatch(reset());
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputStyle IToggle={IToggle}>
        <TextField
          fullWidth
          label="Create a new todo..."
          id="fullWidth"
          onChange={(e) => dispatch(onInput(e))}
          value={todoInput}
        />
      </InputStyle>
    </form>
  );
};
export default TodoInputComponent;

const InputStyle = styled(Box)<IStyle>`
  position: absolute;
  width: 32%;
  top: 10rem;
  left: 0;
  right: 0;
  align-items: center;
  @media screen and (max-width: 1800px) {
    width: 40%;
  }
  @media screen and (max-width: 820px) {
    width: 80%;
  }

  background-color: ${(props) =>
    props.IToggle ? "var(--Very-Dark-Grayish-Blue)" : "var(--Very-Light-Gray)"};
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 5px;

  label {
    font-family: "Josefin Sans", sans-serif;
    font-size: 0.7rem;
    color: ${(props) =>
      props.IToggle
        ? "var(--Dark-Grayish-Blue)"
        : "var( --Very-Dark-Grayish-Blue)"};
    margin-left: 1rem;
  }
`;
function e(e: any) {
  throw new Error("Function not implemented.");
}
