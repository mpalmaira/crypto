import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  @media (max-width: 767px) {
  margin-top: 70px
  }
`;
export const FormContainer = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -100px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const SearchDiv = styled.form`
  background-color: ${(props) => props.theme.secondary};
  width: 320px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 25px;
  color: black;
  position: relative;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 9px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  ::placeholder {
    color: ${(props) => props.theme.mainFont};
  }
  margin-left: 20px;
`;
export const SearchResultsDiv = styled.div`
  width: 320px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 66px;
  z-index: 10;
`;
export const ResultsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const StyledList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: ${(props) => props.theme.mainFont};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
export const ErrorMessageDiv = styled.div`
  width: 380px;
  background-color: ${(props) => props.theme.secondary};
  border-radius: 10px;
  display: ${(props) => (props.showResults > 0 ? "flex" : " none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 66px;
  z-index: 10;
`;
export const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: ${(props) => props.theme.mainFont};
`;
export const PurchasedAmountDiv = styled.div`
  background-color: ${(props) => props.theme.secondary};
  width: 320px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  margin-right: 25px;
  position: relative;
  margin-bottom: 10px;
`;
export const PurchasedAmountInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 9px;
  color: ${(props) => props.theme.mainFont};
  font-size: 17px;
  ::placeholder {
    color: ${(props) => props.theme.mainFont};
  }
  margin-left: 20px;
`;
export const DateContainer = styled.div`
  .react-calendar__month-view__weekdays {
    color: black;
  }
  .react-date-picker__wrapper,
  .react-date-picker__button,
  .react-date-picker__inputGroup__input {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.mainFont};
  }
  .react-date-picker__button,
  .react-date-picker__button__icon {
    stroke: ${(props) => props.theme.mainFont};
  }
  .react-date-picker__wrapper,
  .react-date-picker__inputGroup__input {
    width: 320px;
    height: 40px;
    border: none;
    border-radius: 10px;
    overflow: hidden;
  }
  .react-date-picker__inputGroup {
    padding: 0px 32px;
  }
`;
export const SelectedAssetContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  height: 140px;
  width: 140px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`;
export const SelectedAssetImage = styled.div`
  background-color: ${(props) => props.theme.main};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -90px;
  }
`;
export const StyledClose = styled.div`
  color: ${(props) => props.theme.saveButtonFont};
  background-color: white;
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
  margin-right: 10px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
    margin-right: 0px;
  }
`;
export const StyledSave = styled.div`
  color: ${(props) => props.theme.mainFont};
  background-color: lime;
  height: 40px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 15px;
  cursor: pointer;
`;
export const StyledNameandIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.div`
  margin-left: 8px;
`;
