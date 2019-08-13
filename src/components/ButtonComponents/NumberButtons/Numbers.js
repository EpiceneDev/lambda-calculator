import React, { useState } from "react"
import NumberButton from './NumberButton'
import { numbers } from '../../../data'

const Numbers = () => {
  const {buttonNumbers, setButtonNumbers} = useState(numbers)
  
  return (
    <div>
      {buttonNumbers.map(number => <NumberButton text={number} />)}
    </div>
  );
};

export default Numbers;