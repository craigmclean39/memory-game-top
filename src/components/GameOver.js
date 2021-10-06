import React from 'react';

const GameOver = (props) => {
  const { hasWon, finalScore, restartGame } = props;
  return (
    <React.Fragment>
      <div>Game Over, Your score was {finalScore}</div>
      <button onClick={restartGame}>Restart</button>
    </React.Fragment>
  );
};

export default GameOver;
