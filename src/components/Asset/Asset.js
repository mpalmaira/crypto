import React from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import { deleteAsset} from "../../store/portfolio/actions";
import {
  MainContainer,
  AssetContainer,
  ImageContainer,
  CoinContainer,
  CoinImage,
  StyledImage,
  MarketContainer,
  CoinData,
  StyledData,
  ProgressBarData,
  OutsideBar,
  InsideBar,
  ProgressBarDiv,
  Styled24hChange,
  YourCoinContainer,
  StyledPriceChange,
  StyledDelete,
  StyledEdit,
  IconContainer,
} from "./Asset.styles";
import { ReactComponent as ArrowUp } from "../SVG/ArrowUp.svg";
import { ReactComponent as ArrowDown } from "../SVG/ArrowDownRed.svg";

const ProgressBar = (props) => {
  return (
    <OutsideBar>
      <InsideBar width={(props.value / props.max) * 100} />
    </OutsideBar>
  );
};
export const Asset = (props) => {
  const selectedCurrency = useSelector(
    (state) => state.settings.selectedCurrency
  );
  const dispatch = useDispatch();
  const editAsset = () => {
    props.handleEdit(props.asset);
  };

  return (
    <MainContainer>
      <AssetContainer>
        <ImageContainer>
          <CoinImage>
            <StyledImage src={props.asset.data.large} />
          </CoinImage>
          <span>
            {props.asset.data.name}({props.asset.data.symbol})
          </span>
          <IconContainer>
            <StyledDelete onClick={() => dispatch(deleteAsset(props.asset))} />
            <StyledEdit onClick={editAsset} />
          </IconContainer>
        </ImageContainer>
        <CoinContainer>
          <span>Market Price:</span>
          <MarketContainer>
            <CoinData>
              <span>Current Price:</span>
              <StyledData>
                {selectedCurrency.symbol}
                {props.asset.currentPrice.toLocaleString()}
              </StyledData>
            </CoinData>
            <CoinData>
              <span>Price Change 24h:</span>
              <Styled24hChange value={props.asset.priceChange24h}>
                {props.asset.priceChange24h > 0 ? <ArrowUp /> : <ArrowDown />}
                {selectedCurrency.symbol}
                {props.asset.priceChange24h.toFixed(3)}
              </Styled24hChange>
            </CoinData>
            <ProgressBarData>
              <span>Market Cap vs Volume:</span>
              <StyledData>
                {(
                  (props.asset.totalVolume / props.asset.marketCap) *
                  100
                ).toFixed(2)}
                %
              </StyledData>
              <ProgressBarDiv>
                <ProgressBar
                  value={props.asset.totalVolume}
                  max={props.asset.marketCap}
                />
              </ProgressBarDiv>
            </ProgressBarData>
            <CoinData>
              <span>Circ Supply vs Max Supply:</span>
              <StyledData>
                {(
                  (props.asset.circulatingSupply / props.asset.maxSupply) *
                  100
                ).toFixed(2)}
                %
              </StyledData>
            </CoinData>
          </MarketContainer>
          <span>Your Coin:</span>
          <YourCoinContainer>
            <CoinData>
              <span>Coin Amount:</span>
              <StyledData>{props.asset.amount}</StyledData>
            </CoinData>
            <CoinData>
              <span>Amount Value:</span>
              <StyledData>
                {props.asset.amount * props.asset.currentPrice > 0 ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                {selectedCurrency.symbol}
                {(
                  props.asset.amount * props.asset.currentPrice
                ).toLocaleString()}
              </StyledData>
            </CoinData>
            <CoinData>
              <span>Amount Price Change Since Purchase</span>
              <StyledPriceChange
                value={
                  (props.asset.currentPrice - props.asset.purchasedPrice) *
                  props.asset.amount
                }
              >
                {(props.asset.currentPrice - props.asset.purchasedPrice) *
                  props.asset.amount >
                0 ? (
                  <ArrowUp />
                ) : (
                  <ArrowDown />
                )}
                {selectedCurrency.symbol}
                {(
                  (props.asset.currentPrice - props.asset.purchasedPrice) *
                  props.asset.amount
                ).toLocaleString()}
              </StyledPriceChange>
            </CoinData>
            <CoinData>
              <span>Purchase Date</span>
              <StyledData>
                {dayjs(props.asset.datePurchased).format("MM-DD-YYYY")}
              </StyledData>
            </CoinData>
          </YourCoinContainer>
        </CoinContainer>
      </AssetContainer>
    </MainContainer>
  );
};
