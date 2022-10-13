import React from "react";
import { OutsideBar, InsideBar } from "./ProgressBar.styles";

const ProgressBar = (props) => {
  return (
    <OutsideBar>
      <InsideBar width={(props.value / props.max) * 100} />
    </OutsideBar>
  );
};
export default ProgressBar;
