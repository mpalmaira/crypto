import React, { useState } from "react";
import { Button, Container, ButtonContainer } from "./RangeSelector.styles";

const range = {
  day1: {
    range: 1,
    value: "1d",
  },
  day7: {
    range: 7,
    value: "1w",
  },
  day30: {
    range: 30,
    value: "1m",
  },
  day90: {
    range: 90,
    value: "3m",
  },
  day365: {
    range: 365,
    value: "1y",
  },
  max: {
    range: "max",
    value: "Max",
  },
};
const buttons = Object.values(range);

interface ButtonInterface {
  handleClick: any;
  active: string | number | undefined;
}

const RangeButton = (props: ButtonInterface) => {
  return (
    <>
      {buttons.map((button) => {
        return (
          <ButtonContainer>
            <Button
              id={button.value}
              onClick={props.handleClick}
              selected={props.active === button.range}
            ></Button>
            <div>{button.value}</div>
          </ButtonContainer>
        );
      })}
      ;
    </>
  );
};

interface SelectorInterface {
  handleRangeChange: (arg0:any) => void;
}

export default function RangeSelector(props: SelectorInterface) {
  const [activeRange, setActiveRange] = useState<number | string | undefined>(
    1
  );

  const handleClick = (e: { target: { id: string } }) => {
    const newActive = buttons.find(
      (element) => `${element.value}` === e.target.id
    );
    setActiveRange(newActive?.range);
    props.handleRangeChange(newActive?.range);
  };
  return (
    <Container>
      <RangeButton handleClick={handleClick} active={activeRange} />
    </Container>
  );
}
