import React from 'react';

import './navigation.css';

export default function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>
          <a
            className="how"
            href="#how"
          >
            How to play
          </a>
        </li>
        <li>
          <a
            className="new"
            onClick={() => props.onRestartGame()}
          >
            New game
          </a>
        </li>
      </ul>
    </nav>
  );
}
