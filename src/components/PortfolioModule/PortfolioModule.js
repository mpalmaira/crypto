import React from "react";
import {
  MainContainer,
  ModuleContainer,
  TopContainer,
  MiddleContainer,
  BottomContainer,
  StyledText,
  StyledClose,
} from "./PortfolioModule.styles";

const PortfolioModule = (props) => {
  return (
    <MainContainer>
      <ModuleContainer>
        <TopContainer>
          <StyledText>Select Coins</StyledText>
          <StyledClose onClick={props.handleCloseClick} />
        </TopContainer>
        <MiddleContainer></MiddleContainer>
        <BottomContainer></BottomContainer>
      </ModuleContainer>
    </MainContainer>
  );
};

export default PortfolioModule;
