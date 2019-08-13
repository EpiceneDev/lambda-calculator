import React, { useState } from "react"
import NumberButton from './NumberButton'
import { numbers } from '../../../data'

const Numbers = () => {
  const [buttonNumbers, setButtonNumbers] = useState(numbers)
  console.log(numbers)
  // let buttonNumbers = [1, 2, 3, 4, 5]
  return (
    <div>
      {buttonNumbers.map(number => <NumberButton key={number} text={number} />)}
    </div>
  );
};

export default Numbers;