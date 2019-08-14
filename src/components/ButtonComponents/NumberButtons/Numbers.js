import React, { useState } from "react"
import NumberButton from './NumberButton'
import { numbers } from '../../../data'

const Numbers = (props) => {
  const [buttonNumbers, setButtonNumbers] = useState(numbers);
  console.log("Numbers: ", props);
  return (
    <div>
      {buttonNumbers.map(number => {
        return <NumberButton key={number} text={number} addNumber={props.addNumber} />
      })}
    </div>
  );
};

export default Numbers;