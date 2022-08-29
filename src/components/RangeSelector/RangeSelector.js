import React from "react";
import { Button, Container, ButtonContainer } from "./RangeSelector.styles";

const range = {
  day1: {
    range: 1,
    text: "1d",
    id: Math.random(),
  },
  day7: {
    range: 7,
    text: "1w",
    id: Math.random(),
  },
  day30: {
    range: 30,
    text: "1m",
    id: Math.random(),
  },
  day90: {
    range: 90,
    text: "3m",
    id: Math.random(),
  },
  day365: {
    range: 365,
    text: "1y",
    id: Math.random(),
  },
  max: {
    range: "max",
    text: "Max",
    id: Math.random(),
  },
};
const buttons = Object.values(range);
const RangeButton = (props) => {
  return buttons.map((button) => {
    return (
      <ButtonContainer>
        <Button
          id={button.id}
          onClick={props.handleClick}
          selected={props.active === button.range}
        ></Button>
        <div>{button.text}</div>
      </ButtonContainer>
    );
  });
};

export class RangeSelector extends React.Component {
  state = {
    activeRange: 1,
  };
  handleClick = (e) => {
    const newActive = buttons.find(
      (element) => `${element.id}` === e.target.id
    );
    this.setState({ activeRange: newActive.range });
    this.props.handleRangeChange(newActive.range);
  };
  render() {
    return (
      <Container>
        <RangeButton
          handleClick={this.handleClick}
          active={this.state.activeRange}
        />
      </Container>
    );
  }
}
