import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import DeskTopDarkImage from "../Assets/Images/bg-desktop-dark.jpg";
import DeskTopLightImage from "../Assets/Images/bg-desktop-light.jpg";
import MobileDarkImage from "../Assets/Images/bg-mobile-dark.jpg";
import MobileLightImage from "../Assets/Images/bg-mobile-light.jpg";
import { toggle } from "../Redux/Todo/TodoSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

const HeaderImageComponent = () => {
  const IToggle = useAppSelector((state) => state.myTodo.isToggle);
  return (
    <BackgroundImage>
      <img
        src={window.innerWidth > 480 ? DeskTopDarkImage : MobileDarkImage}
        alt={
          window.innerWidth > 480
            ? "Dark-Background-Image"
            : "Mobile-Background-Image"
        }
        srcSet={IToggle ? DeskTopDarkImage : DeskTopLightImage}
      />
    </BackgroundImage>
  );
};
export default HeaderImageComponent;

const BackgroundImage = styled.div`
  img {
    width: 100vw;
    height: 35vh;
    object-fit: cover;
  }
`;
