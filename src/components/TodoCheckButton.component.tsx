import React from "react";
import styled from "styled-components";
import IconCheck from "../Assets/Images/icon-check.svg";


interface IStyle {
  Icompleted?: boolean;
}

const TodoCheckButtonComponent = ({ completed }: { completed: boolean }) => {
  return (
    <IconBackground Icompleted={completed}>
      <img src={IconCheck} alt="Icon-check" />
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
  height: 30px;
  width: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  }
 
`;
