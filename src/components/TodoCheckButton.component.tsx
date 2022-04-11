import React from "react";
import styled from "styled-components";
import IconCheck from "../Assets/Images/icon-check.svg";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { completedTodos } from "../Redux/Todo/TodoSlice";
interface IStyle {
  Icompleted?: boolean;
}

const TodoCheckButtonComponent = () => {
  const Icompleted = useAppSelector((state) => state.myTodo.todos);
  const dispatch = useAppDispatch();
  console.log(Icompleted);

  return (
    <IconBackground Icompleted={Icompleted}>
      <img
        src={IconCheck}
        alt="Icon-check"
        onClick={() => dispatch(completedTodos(!Icompleted))}
      />
    </IconBackground>
  );
};

export default TodoCheckButtonComponent;

const IconBackground = styled.div<IStyle>`
  img {
    object-fit: contain;
    display:${(props) => (props.Icompleted ? "block" : "none")};
  }
   background:${(props) =>
     props.Icompleted ? "var(--Radial-Background)" : ""}; 
  padding: 12px;
  justify-content: center;
  border-radius: 2rem;
  border: 1px solid var( --Dark-Grayish-Blue);
  }
 
`;
