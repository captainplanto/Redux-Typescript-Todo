import React from "react";
import styled from "styled-components";
import IconCross from "../Assets/Images/icon-cross.svg";
import { useAppDispatch } from "../Redux/hooks";
import { deleteTodo } from "../Redux/Todo/TodoSlice";

const TodoDeleteButtonComponent = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();

  return (
    <Image
      src={IconCross}
      alt="Icon-cross"
      onClick={() => dispatch(deleteTodo(id))}
    />
  );
};

export default TodoDeleteButtonComponent;
const Image = styled.img`
  object-fit: contain;
`;
