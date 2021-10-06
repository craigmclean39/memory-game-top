import '../styles/mountainCard.css';

const GameStart = (props) => {
  const { startGame } = props;
  return (
    <div className='start-container'>
      <div className='start-card shadow'>
        <h1 className='start-card--title'>Mountain Memory</h1>
        <p className='start-card--description'>
          This game will put your memory to the test. You will be shown some
          images of the 20 highest mountains in the world. The images get
          shuffled every-time they are clicked. You cannot click on any image
          more than once or else your score resets to zero. Try to get the
          highest score as possible.
        </p>
        <button onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
};

export default GameStart;
