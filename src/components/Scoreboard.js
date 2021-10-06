import '../styles/mountainCard.css';

const Scoreboard = (props) => {
  const { score, hiScore } = props;
  return (
    <div className='header'>
      <h1 className='header--title'>Mountain Memory</h1>
      <div className='header--scoreboard'>
        <div>Score: {score}</div>
        <div>Hi Score: {hiScore}</div>
      </div>
    </div>
  );
};

export default Scoreboard;
