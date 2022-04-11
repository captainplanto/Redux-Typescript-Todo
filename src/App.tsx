import React, { useState } from "react";
import styled from "styled-components";
import Main from "./Pages/Main";
import { toggle } from "../src/Redux/Todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../src/Redux/hooks";

interface IStyle {
  IToggle?: boolean;
}

function App() {
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  return (
    <AppBody IToggle={IToggle}>
      <Main />
    </AppBody>
  );
}

export default App;

const AppBody = styled.div<IStyle>`
  height: 100vh;
  background-color: ${(props) =>
    props.IToggle ? "var(--Very-Dark-Blue)" : "var(--Very-Light-Grayish-Blue)"};
`;
