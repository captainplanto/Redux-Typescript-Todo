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
  const todoInput = useAppSelector((state) => state.myTodo);

  const dispatch = useAppDispatch();
  console.log(todoInput);
  // const todoItem = todoInput.map((item) =>
  //  { const {id, title, completed} = item
  //   return <List sx={style}>
  //     <StyleDiv>
  //       <TodoCheckButton />
  //       <li
  //         key={item.id}
  //         onClick={() => dispatch(completedTodos(item.completed))}
  //       >
  //         {item.title}
  //       </li>
  //       <TodoDeleteButton />
  //     </StyleDiv>
  //     <Divider />
  //   </List>}
  // );

  const todoItem = todoInput.completedItems.map(({ id, title, completed }) => (
    <TodoStyle
      key={id}
      Icompleted={completed}
      onClick={() => dispatch(completedTodos(id))}
    >
      <List>
        <StyleDiv>
          <li>
            <TodoCheckButton completed={completed} />
            {title}
          </li>
          <TodoDeleteButton />
        </StyleDiv>
        <Divider />
      </List>
    </TodoStyle>
  ));

  return <>{todoItem}</>;
};

export default TodoListComponent;

const StyleDiv = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

const TodoStyle = styled.div<IStyle>`
  padding: 0.3rem;
  li {
    font-size: 0.8rem;
    color: var(--Light-Grayish-Blue);
    display: flex;
    align-items: center;
    text-decoration: ${(props) => (props.Icompleted ? "line-through" : "")};
    :hover {
      cursor: ${(props) => (props.Icompleted ? "none" : "pointer")};
    }
  }
`;
