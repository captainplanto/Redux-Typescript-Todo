import React, { FC } from "react";
import styled from "styled-components";
import SortingComponent from "./SortingFilter.component";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const FooterFilter = () => {
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  const todoInput = useAppSelector((state) => state.myTodo.input);
  return (
    <Footer>
      {window.innerWidth > 480 ? (
        <ul>
          <li>{todoInput.length < 2 ? '1 items left' : '2 items left'}</li>
            <SortingComponent />
          <li>Clear Completed</li>
        </ul>
      ) : (
        <MobileSort>
          <li>3 items Left</li>
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
    justify-content: space-between;
   
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
