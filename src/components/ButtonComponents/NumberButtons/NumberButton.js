import React from 'react';
import Numbers from './Numbers'
import { numbers } from '../../../data'

const NumberButton = (props) => {
  return (
    <button>
      {props.text}
    </button>
  );
};

export default NumberButton;