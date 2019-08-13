import React, { useState } from "react"
import NumberButton from './NumberButton'
import { numbers } from '../../../data'

const Numbers = () => {
  const {NumberButton, setNumberButton} = useState(numbers)
  
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <NumberButton />
    </div>
  );
};

export default Numbers;