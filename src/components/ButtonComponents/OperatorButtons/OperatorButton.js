import React from "react";

const OperatorButton = (props) => {
  console.log("props: ", props)
  
  return ( 
      <button>
        {props.operator.char}
      </button>
  );
};

export default OperatorButton;