import React, { useState } from "react";
import PortfolioModule from "../../components/PortfolioModule/PortfolioModule";
import {
  MainContainer,
  AddAssetContainer,
  AddAssetButton,
  StyledText,
} from "./Portfolio.styles";

export default function Portfolio() {
  const [openModule, setOpenModule] = useState(false);
  const handleAddAssetClick = () => {
    setOpenModule(true);
  };
  const handleCloseClick = () => {
    setOpenModule(false);
  };
  return (
    <MainContainer>
      <AddAssetContainer>
        <AddAssetButton onClick={handleAddAssetClick}>Add Asset</AddAssetButton>
      </AddAssetContainer>
      <StyledText>Your statistics</StyledText>
      {openModule && <PortfolioModule handleCloseClick={handleCloseClick} />}
    </MainContainer>
  );
}
