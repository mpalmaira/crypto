import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-date-picker";
import dayjs from "dayjs";
import {
  getAssetSearchData,
  clearAssetSearch,
  selectedAssetFromResults,
  addAssetSelected,
} from "../../store/portfolio/actions";
import {
  MainContainer,
  FormContainer,
  FormDiv,
  SearchDiv,
  SearchInput,
  SearchResultsDiv,
  ResultsDiv,
  StyledList,
  ErrorMessage,
  ErrorMessageDiv,
  PurchasedAmountInput,
  PurchasedAmountDiv,
  DateContainer,
  SelectedAssetContainer,
  SelectedAssetImage,
  StyledButtons,
  StyledClose,
  StyledSave,
} from "./AssetInput.styles";

const SearchResults = (props) => {
  return (
    <SearchResultsDiv>
      <ResultsDiv>
        {props.assetSearch.map((result) => {
          return (
            <StyledList
              key={result.id}
              onClick={() => props.handleSelectedCoin(result)}
            >
              <img src={result.thumb} alt="coin thumb" />
              <div>{result.name}</div>
              <div>({result.symbol})</div>
            </StyledList>
          );
        })}
      </ResultsDiv>
    </SearchResultsDiv>
  );
};

export const AssetInput = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState(false);
  const [amountInput, setAmountInput] = useState("");
  const [dateInput, setDateInput] = useState(new Date());
  const assetSearch = useSelector((state) => state.portfolio.assetSearch);
  const isLoading = useSelector((state) => state.portfolio.isLoading);
  const selectedAsset = useSelector(
    (state) => state.portfolio.addAssetSelection
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length % 3) {
      setShowResults(true);
      setTimeout(() => {
        dispatch(getAssetSearchData(e.target.value));
      }, 1000);
    } else {
      setShowResults(false);
      dispatch(clearAssetSearch());
    }
  };

  const handleSelectedCoin = (result) => {
    setSearchTerm(result.name);
    setShowResults(false);
    dispatch(selectedAssetFromResults(result));
    setSelected(true);
  };
  const handleAmountInputChange = (e) => {
    setAmountInput(e.target.value);
  };

  const handleDateInputChange = (value) => {
    setDateInput(value);
  };
  const handleSave = () => {
    props.handleCloseClick();
    dispatch(
      addAssetSelected({
        data: selectedAsset,
        amount: parseInt(amountInput),
        datePurchased: dayjs(dateInput).format("DD-MM-YYYY"),
      })
    );
  };

  useEffect(() => {
    if (assetSearch && assetSearch > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [assetSearch]);

  return (
    <MainContainer>
      <FormContainer>
        <SelectedAssetContainer>
          <SelectedAssetImage>
            {selected && <img src={selectedAsset.thumb} alt="selected asset" />}
          </SelectedAssetImage>
          {selected && (
            <span>
              {selectedAsset.name}({selectedAsset.symbol})
            </span>
          )}
        </SelectedAssetContainer>
        <FormDiv>
          <SearchDiv onSubmit={(e) => e.preventDefault()}>
            <SearchInput
              type="text"
              placeholder="Search Coins"
              onChange={handleChange}
              value={searchTerm}
              required
            />
            {showResults &&
              (assetSearch ? (
                <SearchResults
                  assetSearch={assetSearch}
                  handleSelectedCoin={handleSelectedCoin}
                />
              ) : (
                <ErrorMessageDiv showResults={showResults}>
                  <ErrorMessage>
                    {isLoading ? (
                      <ErrorMessage>Loading... Please Wait</ErrorMessage>
                    ) : (
                      !assetSearch && (
                        <ErrorMessage>
                          No Results Found. Try another Search
                        </ErrorMessage>
                      )
                    )}
                  </ErrorMessage>
                </ErrorMessageDiv>
              ))}
          </SearchDiv>
          <PurchasedAmountDiv>
            <PurchasedAmountInput
              placeholder="Purchased Amount"
              value={amountInput}
              onChange={handleAmountInputChange}
              required
            />
          </PurchasedAmountDiv>
          <DateContainer>
            <DatePicker
              onChange={handleDateInputChange}
              value={dateInput}
              dayAriaLabel="Day"
              required
            />
          </DateContainer>
        </FormDiv>
      </FormContainer>
      <StyledButtons>
        <StyledClose onClick={props.handleCloseClick}>Close</StyledClose>
        <StyledSave onClick={handleSave}>Save and Continue</StyledSave>
      </StyledButtons>
    </MainContainer>
  );
};
