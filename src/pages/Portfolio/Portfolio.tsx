import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PortfolioModule from "../../components/PortfolioModule/PortfolioModule";
import { Asset } from "../../components/Asset/Asset";
import {
  clearAssetSearch,
  clearAssetFromResults,
  loadAssets,
} from "../../store/portfolio/actions";
import {
  MainContainer,
  AddAssetContainer,
  AddAssetButton,
  StyledText,
} from "./Portfolio.styles";

const Portfolio = () => {
  const [openModule, setOpenModule] = useState<boolean>(false);
  const [editableAsset, setEditableAsset] = useState<any>(null);
  const [editing, setEditing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency.value
  );
  const assets = useSelector((state) => state.portfolio.assets);

  const toggleEditing = () => {
    setEditing(!editing);
  };
  const handleEdit = (asset: any) => {
    setOpenModule(true);
    setEditableAsset(asset);
    toggleEditing();
  };
  const handleCloseClick = () => {
    setOpenModule(false);
    dispatch(clearAssetSearch());
    dispatch(clearAssetFromResults());
    if (editing) {
      toggleEditing();
    }
  };
  const handleAddAssetClick = () => {
    setOpenModule(true);
  };

  useEffect(() => {
    dispatch(loadAssets());
    //eslint-disable-next-line
  }, [selectedCurrency]);

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
          toggleEditing={toggleEditing}
        />
      )}

      <div>
        {assets &&
          assets.map((asset: any) => {
            return (
              <Asset key={asset.id} asset={asset} handleEdit={handleEdit} />
            );
          })}
      </div>
    </MainContainer>
  );
};
export default Portfolio;
