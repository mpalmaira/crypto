import React from "react";
import { AssetInput } from "../AssetInput/AssetInput";
import {
  MainContainer,
  ModuleContainer,
  TopContainer,
  MiddleContainer,
  StyledText,
  StyledClose,
} from "./PortfolioModule.styles";

interface Props {
  handleCloseClick: () => void;
  asset: {
    data: {
      name: string;
      thumb: string;
      symbol: string;
    };
    amount: number | string;
    datePurchased: string | Date;
  };
  editing: boolean;
  toggleEditing: () => void;
}

const PortfolioModule = (props: Props) => {
  return (
    <MainContainer>
      <ModuleContainer>
        <TopContainer>
          <StyledText>Select Coins</StyledText>
          <StyledClose onClick={props.handleCloseClick} />
        </TopContainer>
        <MiddleContainer>
          <AssetInput
            handleCloseClick={props.handleCloseClick}
            asset={props.asset}
            editing={props.editing}
            toggleEditing={props.toggleEditing}
          />
        </MiddleContainer>
      </ModuleContainer>
    </MainContainer>
  );
};

export default PortfolioModule;
