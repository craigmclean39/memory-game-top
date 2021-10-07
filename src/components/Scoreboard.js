import '../styles/mountainCard.css';

const Scoreboard = (props) => {
  const { score, hiScore } = props;
  return (
    <div className='header'>
      <h1 className='header--title'>Mountain Memory</h1>
      <div className='header--scoreboard'>
        <p>Score: {score}</p>
        <p>Hi Score: {hiScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
