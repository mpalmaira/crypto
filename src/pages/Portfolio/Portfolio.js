import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioModule from "../../components/PortfolioModule/PortfolioModule";
import { Asset } from "../../components/Asset/Asset";
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
  const assets = useSelector((state) => state.portfolio.assets);
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
      {assets &&
        assets.map((asset, index) => {
          return <Asset key={index} asset={asset} />;
        })}
    </MainContainer>
  );
}
