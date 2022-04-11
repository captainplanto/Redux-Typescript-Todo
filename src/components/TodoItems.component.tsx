import React, { FC } from "react";
import styled from "styled-components";
import TodoBackground from "./TodoBackground.component";
import SortingFilter from "./SortingFilter.component";
import FooterFilter from "./FooterFilter.component";
import TodoList from "./TodoList.component";
import TodoListComponent from "./TodoList.component";

const TodoItemComponent = () => {
  return (
    <TodoStyle>
      <TodoBackground>
        <TodoListComponent />
        <FooterFilter />
      </TodoBackground>
      {window.innerWidth <= 480 && (
        <SortBackground>
          <ul>
            <SortingFilter />
          </ul>
        </SortBackground>
      )}
    </TodoStyle>
  );
};
export default TodoItemComponent;
const TodoStyle = styled.div`
  li {
    font-size: 1rem;
    list-style: none;
  }
`;
const SortBackground = styled.div`
  ul {
    display: flex;
    gap: 1rem;
    padding: 0.7rem;
    justify-content: center;
    li {
      color: var(--Dark-Grayish-Blue);
      :hover {
        cursor: pointer;
        color: var(--Bright-Blue);
      }
    }
  }
  width: 80%;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 5px;
  background: var(--Very-Dark-Grayish-Blue);
`;
