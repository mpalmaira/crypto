import styled from "styled-components";
import { ReactComponent as CurrencyArrows } from "../SVG/converter-arrow.svg";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledCurrencyArrows = styled(CurrencyArrows)`
  fill: ${(props) => props.theme.mainFont};
  path {
    fill: ${(props) => props.theme.mainFont};
  }
`;
export const ConverterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-conter: center;
`;
export const Input = styled.input`
  background: none;
  border: none;
  outline: none;
  color: ${(props) => props.theme.mainFont};
  padding: 3px;
`;
export const InputDiv = styled.div`
  background-color: ${(props) => props.theme.tertiary};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 14px;
`;
export const StyledName = styled.div`
  background-color: lime;
  padding: 11px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  font-weight: bold;
`;
export const Symbol = styled.span`
  padding: 0px 8px;
`;
