import '../styles/mountainCard.css';
import Mountain from '../media/mountain.png';

const Scoreboard = (props) => {
  const { score, hiScore } = props;
  return (
    <div className='header'>
      <div className='header--title-container'>
        <img
          className='mountain-card--image'
          src={Mountain}
          alt='Mountain Memory'
          width='80px'
          height='80px'
        />
        <h1 className='header--title'>Mountain Memory</h1>
      </div>
      <div className='header--scoreboard'>
        <p>Score: {score}</p>
        <p>Hi Score: {hiScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
