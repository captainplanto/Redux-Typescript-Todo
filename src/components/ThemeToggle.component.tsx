import React, { useState } from "react";
import styled from "styled-components";
import IconSun from "../Assets/Images/icon-sun.svg";
import IconMoon from "../Assets/Images/icon-moon.svg";
import InputComponent from "./TodoInput.component";
import { toggle } from "../Redux/Todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const ThemeToggleComponent = () => {
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  const dispatch = useAppDispatch();

  return (
    <ToggleStyle>
      <h4>TODO</h4>
      <img
        src={IToggle ? IconSun : IconMoon}
        alt="Sun-Icon"
        onClick={() => dispatch(toggle(!IToggle))}
      />
    </ToggleStyle>
  );
};
export default ThemeToggleComponent;

const ToggleStyle = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  column-gap: 25%;
  @media screen and (max-width: 1800px) {
    gap: 30%;
  }
  @media screen and (max-width: 820px) {
    gap: 60%;
  }
  @media screen and (max-width: 480px) {
    top: 1.5rem;
  }
  img {
    object-fit: contain;
  }
  h4 {
    color: white;
  }
`;
