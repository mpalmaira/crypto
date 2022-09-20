import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchData, clearSearch } from "../../store/search/actions";
import {
  SearchDiv,
  SearchInput,
  StyledSearchIcon,
  SearchResultsDiv,
  ResultsDiv,
  StyledLink,
  ErrorMessage,
  ErrorMessageDiv,
  StyledName,
  StyledNameandIcon,
} from "./SearchBar.styles";

const SearchResults = (props) => {
  return (
    <SearchResultsDiv>
      <ResultsDiv>
        {props.searchData.map((result) => {
          return (
            <StyledLink
              key={result.id}
              to={`/coinpage/${result.id}`}
              onClick={() => props.handleLinkClick()}
            >
              <StyledNameandIcon>
                <img src={result.thumb} alt="coin thumb" />
                <StyledName>{result.name}</StyledName>
              </StyledNameandIcon>
              <div>({result.symbol})</div>
            </StyledLink>
          );
        })}
      </ResultsDiv>
    </SearchResultsDiv>
  );
};

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState("false");
  const searchData = useSelector((state) => state.search.searchData);
  const isLoading = useSelector((state) => state.search.isLoading);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length % 3) {
      setShowResults(true);
      setTimeout(() => {
        dispatch(getSearchData(e.target.value));
      }, 1000);
    } else {
      setShowResults(false);
      dispatch(clearSearch());
    }
  };

  const handleLinkClick = () => {
    setSearchTerm("");
    setShowResults(false);
  };

  useEffect(() => {
    if (searchData && searchData > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [searchData]);

  return (
    <SearchDiv onSubmit={(e) => e.preventDefault()}>
      <StyledSearchIcon />
      <SearchInput
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      {showResults &&
        (searchData ? (
          <SearchResults
            searchData={searchData}
            handleLinkClick={handleLinkClick}
          />
        ) : (
          <ErrorMessageDiv showResults={showResults}>
            <ErrorMessage>
              {isLoading ? (
                <ErrorMessage>Loading... Please Wait</ErrorMessage>
              ) : (
                !searchData && (
                  <ErrorMessage>
                    No Results Found. Try another Search
                  </ErrorMessage>
                )
              )}
            </ErrorMessage>
          </ErrorMessageDiv>
        ))}
    </SearchDiv>
  );
};
