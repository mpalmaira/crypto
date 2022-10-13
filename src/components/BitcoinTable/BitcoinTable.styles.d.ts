import styled from "styled-components";
import { ReactComponent as NextArrow } from "../SVG/arrow-next.svg";
import { ReactComponent as BackArrow } from "../SVG/arrow-back.svg";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 0px;
    justify-content: center;
  }
`;
export const LineContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 833px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 21px;
  margin-right: 46px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const MainTextContainer = styled.div`
  color: ${(props) => props.theme.mainFont};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const BarContainer = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  margin-left: 46px;
  width: 833px;
  padding: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const BitcoinHeader = styled.p`
  font-size: 22px;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;
export const StyledDate = styled.p`
  font-size: 22px;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
export const BitcoinNumber = styled.p`
  font-size: 44px;
  margin: 0;
  padding: 0;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;
export const MobileContainer = styled.div`
  display: none;
  margin-top: 25px;
  padding: 0px 24px;
  @media (max-width: 767px) {
    display: flex;
    .slick-slider {
      width: 390px;
    }
    .slick-prev,
    .slick-next {
      z-index: 2;
      top: 10%;
    }
    .slick-prev {
      left: 250px;
    }
    .slick-next {
      right: 30px;
    }
  }
`;

export const LineContainerMobile = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BarContainerMobile = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledNextArrow = styled(NextArrow)``;
export const StyledBackArrow = styled(BackArrow)``;
