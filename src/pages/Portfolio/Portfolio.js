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

export default function Portfolio(props) {
  const [openModule, setOpenModule] = useState(false);
  const [editableAsset, setEditableAsset] = useState(null);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.portfolio.assets);
  const handleEdit = (asset) => {
    setOpenModule(true);
    setEditableAsset(asset);
    setEditing(true);
  };
  const handleCloseClick = () => {
    setOpenModule(false);
    dispatch(clearAssetSearch());
    dispatch(clearAssetFromResults());
  };
  const handleAddAssetClick = () => {
    setOpenModule(true);
  };
  return (
    <MainContainer>
      <AddAssetContainer>
        <AddAssetButton onClick={handleAddAssetClick}>Add Asset</AddAssetButton>
      </AddAssetContainer>
      <StyledText>Your statistics</StyledText>
      {openModule && (
        <PortfolioModule
          handleCloseClick={handleCloseClick}
          asset={editableAsset}
          editing={editing}
        />
      )}
      {assets &&
        assets.map((asset, index) => {
          return (
            <Asset
              key={index}
              asset={asset}
              handleEdit={handleEdit}
              editing={editing}
            />
          );
        })}
    </MainContainer>
  );
}
