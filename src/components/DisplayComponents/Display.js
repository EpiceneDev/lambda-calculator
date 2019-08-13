import React from "react";

export const Display = (props) => {
  console.log("Display: ", props, props.number)
  return (
    <div className="display">
      {props.number}
    </div>
    );
};
