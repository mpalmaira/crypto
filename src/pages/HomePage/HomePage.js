import React from "react";
import BitcoinTable from "../../components/BitcoinTable/BitcoinTable";
import CoinTable from "../../components/CoinTable";
import { Container, StyledHeading } from "./HomePage.styles";

export default function HomePage(props) {
  return (
    <Container>
      <StyledHeading>Your Overview</StyledHeading>
      <BitcoinTable />
      <StyledHeading>Your Overview</StyledHeading>
      <CoinTable />
    </Container>
  );
}
