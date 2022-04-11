import React from "react";
import styled from "styled-components";
import IconCross from "../Assets/Images/icon-cross.svg";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const TodoDeleteButtonComponent = () => {
  const todoInput = useAppSelector((state) => state.myTodo.todos);

  return <Image src={IconCross} alt="Icon-cross" />;
};

export default TodoDeleteButtonComponent;
const Image = styled.img`
  object-fit: contain;
`;
