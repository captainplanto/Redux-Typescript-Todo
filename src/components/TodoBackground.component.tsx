import React, { Children, FC } from "react";
import styled from "styled-components";
import SortingComponent from "./SortingFilter.component";
import { toggle } from "../Redux/Todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

interface IBackground {
  children?: any;
}

interface IStyle {
  IToggle?: boolean;
}

const TodoBackgroundComponent: FC<IBackground> = ({
  children,

  ...props
}) => {
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  const dispatch = useAppDispatch();
  return <BackgroundList IToggle={IToggle}>{children}</BackgroundList>;
};
export default TodoBackgroundComponent;

const BackgroundList = styled.div<IStyle>`
  width: 32%;
  margin-top: 1rem;
  @media screen and (max-width: 1800px) {
    width: 40%;
  }
  @media screen and (max-width: 820px) {
    width: 80%;
  }

  margin: 0 auto;
  background: ${(props) =>
    props.IToggle
      ? "var(--Very-Dark-Grayish-Blue)"
      : "var( --Very-Light-Gray)"};
  padding: 0.5rem;
  border-radius: 5px;
`;
