import React from 'react';

const GameOver = (props) => {
  const { hasWon, finalScore, restartGame } = props;
  return (
    <React.Fragment>
      <div className='start-container'>
        <div className='start-card shadow'>
          <h1 className='start-card--title'>
            {hasWon ? 'You Won!!' : 'Game Over'}
          </h1>
          <p className='start-card--description'>
            {`Your score was ${finalScore}`}
          </p>
          <button className='start-card--button' onClick={restartGame}>
            Restart Game
          </button>
        </div>
      </div>
      <div className='footer'></div>
    </React.Fragment>
  );
};

export default GameOver;
