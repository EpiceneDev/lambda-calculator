import React, { useState } from 'react';
import './App.scss';
import Logo from './components/DisplayComponents/Logo';
import Display from './components/DisplayComponents/Display';
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
// import OperatorButtons from './components/ButtonComponents/OperatorButtons/OperatorButton'
// import Button


function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [displayValue, setDisplayValue] = useState("");
  const addNumber = (number) => {
    setDisplayValue(displayValue => displayValue + number);
  };
  const addOperator = (operator) => {
    if (operator === "="){
      setDisplayValue(displayValue => eval(displayValue));
    }else{
      setDisplayValue(displayValue => displayValue + " " + operator + " ");
      //setDisplayValue(displayValue => displayValue + " " + operator + " ");
    }
  };
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display number={displayValue} />
        <Numbers addNumber={addNumber} />
        <Operators addOperator={addOperator} />
        <Specials />
      </div>
    </div>
  );
}

export default App;
