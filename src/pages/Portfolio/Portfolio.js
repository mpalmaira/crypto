import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PortfolioModule from "../../components/PortfolioModule/PortfolioModule";
import {
  clearAssetSearch,
  clearAssetFromResults,
} from "../../store/portfolio/actions";
import {
  MainContainer,
  AddAssetContainer,
  AddAssetButton,
  StyledText,
} from "./Portfolio.styles";

export default function Portfolio() {
  const [openModule, setOpenModule] = useState(false);
  const dispatch = useDispatch();
  const handleAddAssetClick = () => {
    setOpenModule(true);
  };
  const handleCloseClick = () => {
    setOpenModule(false);
    dispatch(clearAssetSearch());
    dispatch(clearAssetFromResults());
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
