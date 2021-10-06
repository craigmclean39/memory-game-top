import RandomCardDisplay from './RandomCardDisplay';

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
      <div>Score: {score} </div>
      <div>Hi Score: {hiScore} </div>
      <RandomCardDisplay
        key={cardDisplayKey}
        mountains={mountains}
        selectedMountains={selectedMountains}
        handleClick={handleClick}
      />
    </div>
  );
};

export default Gameplay;
