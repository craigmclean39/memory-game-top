import React, { useRef } from 'react';
import { useState } from 'react';
import RandomCardDisplay from './RandomCardDisplay';

const MemoryGame = (props) => {
  const { mountains } = props;
  const [score, _setScore] = useState(0);
  const [selectedMountains, _setSelectedMountains] = useState([]);
  const scoreRef = useRef(score);
  const selectedMountainsRef = useRef(selectedMountains);

  const setScore = (value) => {
    scoreRef.current = value;
    _setScore(value);
  };

  const setSelectedMountains = (value) => {
    selectedMountainsRef.current = value;
    _setSelectedMountains(value);
  };

  const handleClick = (event, id) => {
    console.log(event);
    console.log(id);

    if (selectedMountainsRef.current.includes(id)) {
      console.log('Game Over');
      setScore(0);
      setSelectedMountains([]);
    } else {
      setScore(scoreRef.current + 1);
      setSelectedMountains([...selectedMountainsRef.current, id]);
    }
  };

  return (
    <div>
      <div>Score: {score} </div>
      <RandomCardDisplay
        mountains={mountains}
        selectedMountains={selectedMountains}
        handleClick={handleClick}
      />
    </div>
  );
};

export default MemoryGame;
