import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchData, clearSearch } from "../../store/search/actions";
import {
  MainContainer,
  NavItem,
  StyledText,
  StyledOverview,
  StyledPortfolio,
  StyledSummary,
  StyledSearch,
  IconDiv,
  SearchNavDiv,
  SearchMobileDiv,
  SearchMobileContainer,
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
  StyledClose,
  StyledTop,
  CloseDiv,
  StyledSpan,
} from "./NavbarMobile.styles";
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

const SearchBar = (props: { CloseMobileSearch: () => void }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);
  const searchData = useSelector((state) => state.search.searchData);
  const isLoading = useSelector((state) => state.search.isLoading);
  const dispatch = useDispatch();

  const handleChange = (e: {
    target: { value: string | React.SetStateAction<string> };
  }) => {
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
    props.CloseMobileSearch();
  };

  useEffect(() => {
    if (searchData && searchData > 0) {
      setShowResults(true);
    }
    //eslint-disable-next-line
  }, [searchData]);

  return (
    <SearchDiv onSubmit={(e: { preventDefault: () => any; }) => e.preventDefault()}>
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

const SearchMobile = (props: { CloseMobileSearch: () => void; }) => {
  return (
    <SearchMobileContainer>
      <SearchMobileDiv>
        <StyledTop>
          <CloseDiv>
            <StyledClose onClick={props.CloseMobileSearch} />
          </CloseDiv>
          <StyledSpan onClick={props.CloseMobileSearch}>Close</StyledSpan>
        </StyledTop>
        <SearchBar CloseMobileSearch={props.CloseMobileSearch} />
      </SearchMobileDiv>
    </SearchMobileContainer>
  );
};

const NavbarMobile = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const toggleMobileSearch = () => {
    setSearchOpen(!searchOpen);
  };
  const CloseMobileSearch = () => {
    setSearchOpen(false);
  };
  return (
    <>
      {searchOpen && <SearchMobile CloseMobileSearch={CloseMobileSearch} />}
      <MainContainer>
        <NavItem to="/" onClick={CloseMobileSearch}>
          <IconDiv>
            <StyledOverview />
          </IconDiv>
          <StyledText>Overview</StyledText>
        </NavItem>
        <NavItem to="/Portfolio" onClick={CloseMobileSearch}>
          <IconDiv>
            <StyledPortfolio />
          </IconDiv>
          <StyledText>Portfolio</StyledText>
        </NavItem>
        <NavItem to="/" onClick={CloseMobileSearch}>
          <IconDiv>
            <StyledSummary />
          </IconDiv>
          <StyledText>Summary</StyledText>
        </NavItem>
        <SearchNavDiv onClick={toggleMobileSearch}>
          <IconDiv>
            <StyledSearch />
          </IconDiv>
          <StyledText>Search</StyledText>
        </SearchNavDiv>
      </MainContainer>
    </>
  );
};

export default NavbarMobile;
