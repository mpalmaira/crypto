import styled from "styled-components";
import { ReactComponent as Close } from "../SVG/xmark-solid.svg";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 80px;
`;
export const ModuleContainer = styled.div`
  background-color: ${(props) => props.theme.main};
  width: 50%;
  height: 30%;
  box-shadow: 0px 0px 0px 9999px #000000b0;
  z-index: 10;
  display: flex;
  flex-direction: column;;
`;
export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 57%;
  height: 10%;
  margin-left: auto;
`;
export const MiddleContainer = styled.div``;
export const BottomContainer = styled.div``;
export const StyledText = styled.span`
  color: ${(props) => props.theme.mainFont};
  font-size: 16px;
  width: 100;
  font-weight: bold;
`;
export const StyledClose = styled(Close)`
  fill: lime;
  height: 40px;
  width: 40px;
  margin-left: auto;
`;
