import React from 'react';

import Navigation from './navigation';
import Header from './header';
import Clue from './clue';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessHistory from './guess-history';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      clue: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100) + 1
    };
  }

  restartGame() {
    this.setState({
      guesses: [],
      clue: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    });
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({ clue: 'Please enter a valid number' });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let clue;
    if (difference >= 50) {
      clue = 'Very Cold...';
    } else if (difference >= 30) {
      clue = 'Cold...';
    } else if (difference >= 10) {
      clue = 'Warm.';
    } else if (difference >= 1) {
      clue = 'Hot!';
    } else {
      clue = 'You got it!';
    }

    this.setState({
      clue,
      guesses: [...this.state.guesses, guess]
    });
  }

  render() {
    const { clue, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Navigation />
        <Header />
        <main role="main">
          <Clue clue={clue}/>
          <GuessForm onMakeGuess={guess => this.makeGuess(guess)} />
          <GuessCount
            guessCount={guessCount}
             />
          <GuessHistory guesses={guesses} />
        </main>
      </div>
    );
  }
}
