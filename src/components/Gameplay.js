import RandomCardDisplay from './RandomCardDisplay';
import Scoreboard from './Scoreboard';

const Gameplay = (props) => {
  const {
    score,
    hiScore,
    cardDisplayKey,
    mountains,
    selectedMountains,
    handleClick,
  } = props;

  return (
    <div>
      <Scoreboard score={score} hiScore={hiScore} />
      <div className='content'>
        <RandomCardDisplay
          key={cardDisplayKey}
          mountains={mountains}
          selectedMountains={selectedMountains}
          handleClick={handleClick}
        />
      </div>
      <div className='footer'></div>
    </div>
  );
};

export default Gameplay;
