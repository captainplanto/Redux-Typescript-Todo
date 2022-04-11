import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import HeaderImage from "../components/HeaderImage.component";
import ThemeToggle from "../components/ThemeToggle.component";
import TodoInput from "../components/TodoInput.component";
import TodoItems from "../components/TodoItems.component";


const Main = () => {
  return (
    <MainStyle>
      <HeaderImage />
      <ThemeToggle/>
      <TodoInput />
      <TodoItems />
    </MainStyle>
  );
};
export default Main;

const MainStyle = styled.div``;
