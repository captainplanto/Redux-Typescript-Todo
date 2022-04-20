import React from "react";
import styled from "styled-components";
import SortingComponent from "./SortingFilter.component";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";
import {
  clearCompletedFilter,
  completedTodos,
  tabIndex,
} from "../Redux/Todo/TodoSlice";

const FooterFilter = () => {
  const itemToComplete = useAppSelector((state) =>
    state.myTodo.todos.filter((todo) => todo.completed === false)
  );
  const activeTab = useAppSelector((state) => state.myTodo.tabIndex);
  const dispatch = useAppDispatch();

  return (
    <Footer>
      {window.innerWidth > 480 ? (
        <ul>
          <li>
            {itemToComplete.length}
            {itemToComplete.length < 2 ? "item left" : "items left"}
          </li>
          
          <SortingComponent />
        </ul>
      ) : (
        <MobileSort>
          <li>
            {itemToComplete.length}  
            {itemToComplete.length < 2 ? "item left" : "items left"}
          </li>
          <li>Clear Completed</li>
        </MobileSort>
      )}
    </Footer>
  );
};
export default FooterFilter;
const Footer = styled.div`
  padding-top: 2rem;
  ul {
    display: flex;
 justify-content:space-between;

    li {
      font-size: 14px;
      color: var(--Dark-Grayish-Blue);
      :hover {
        cursor: pointer;
        color: var(--Bright-Blue);
      }
      @media screen and (max-width: 3000px) {
        font-size: 14px;
      }
    }
  }
`;

const MobileSort = styled.div`
  display: flex;
  justify-content: space-between;
  li {
    color: var(--Dark-Grayish-Blue);
    :hover {
      cursor: pointer;
      color: var(--Bright-Blue);
    }
  }
`;
