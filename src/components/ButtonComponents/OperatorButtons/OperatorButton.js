import React from "react";

const OperatorButton = (props) => {
  console.log("props: ", props)
  
  return ( 
      <button onClick = {() => console.log(props.operator.char)}  >
        {props.operator.char}
      </button>
  );
};

export default OperatorButton;