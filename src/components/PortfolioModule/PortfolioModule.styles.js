import styled from "styled-components";
import { ReactComponent as Close } from "../SVG/xmark-solid.svg";


export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
`;
export const ModuleContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 50%;
  height: 40%;
  box-shadow: 0px 0px 0px 9999px #000000b0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  border-radius: 10px
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 57%;
  height: 10%;
  margin-left: auto;
  padding: 30px 0px;
`;
export const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const StyledText = styled.span`
  color: ${(props) => props.theme.mainFont};
  font-size: 23px;
  width: 100;
  font-weight: bold;
`;
export const StyledClose = styled(Close)`
  fill: lime;
  height: 40px;
  width: 40px;
  margin-left: auto;
`;
