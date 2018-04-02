import React from 'react';

import './clue.css';

export default function Clue(props) {

  return (
    <h2
      id="clue"
      role="status"
    >
      {props.clue}
    </h2>
  );
}
