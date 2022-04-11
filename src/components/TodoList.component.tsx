import React, { FC, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { addTodo, onInput } from "../Redux/Todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { completedTodos } from "../Redux/Todo/TodoSlice";
import TodoCheckButton from "./TodoCheckButton.component";
import TodoDeleteButton from "./TodoDeleteButton.component";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: "100%",
  borderColor: "var(--DividerBorderColor)",
};

interface IStyle {
  Icompleted?: boolean;
}

const TodoListComponent = () => {
  const todoInput = useAppSelector((state) => state.myTodo.todos);
  const Icompleted = useAppSelector((state) => state.myTodo.todos.completed);

  const dispatch = useAppDispatch();
  console.log(todoInput);
  const todoItem = todoInput.map((todo: { key: React.Key; title: string }) => (
    <List sx={style}>
      <StyleDiv>
        <TodoCheckButton />
        <li
          key={todo.key}
          onClick={() => dispatch(completedTodos(!Icompleted))}
        >
          {todo.title}
        </li>
        <TodoDeleteButton />
      </StyleDiv>
      <Divider />
    </List>
  ));

  return (
    <TodoStyle Icompleted={Icompleted}>
      <ul>{todoItem}</ul>
    </TodoStyle>
  );
};

export default TodoListComponent;

const StyleDiv = styled.div`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const TodoStyle = styled.div<IStyle>`
  margin-left: 0.7rem;
  li {
    font-size: 0.8rem;
    color: var(--Light-Grayish-Blue);
    margin-left: 1rem;
    text-decoration: ${(props) => (props.Icompleted ? "line-through" : "")};
    :hover {
      cursor: ${(props) => (props.Icompleted ? "none" : "pointer")};
    }
  }
`;
