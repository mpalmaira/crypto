import React from "react";
import BitcoinTable from '../../components/BitcoinTable/BitcoinTable'
import CoinTable from "../../components/CoinTable";
import { Container } from "./HomePage.styles";

export default function HomePage(props) {
  return (
    <Container>
      <BitcoinTable  />
      <CoinTable />
    </Container>
  );
}
