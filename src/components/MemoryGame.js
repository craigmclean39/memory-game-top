import React, { useRef } from 'react';
import { useState } from 'react';
import RandomCardDisplay from './RandomCardDisplay';
import uniqueid from 'uniqid';

const MemoryGame = (props) => {
  const { mountains } = props;

  const [score, _setScore] = useState(0);
  const scoreRef = useRef(score);

  const [hiScore, _setHiScore] = useState(0);
  const hiScoreRef = useRef(hiScore);

  const [selectedMountains, _setSelectedMountains] = useState([]);
  const selectedMountainsRef = useRef(selectedMountains);

  const [cardDisplayKey, setCardDisplayKey] = useState(uniqueid());

  const setScore = (value) => {
    scoreRef.current = value;
    _setScore(value);
  };

  const setSelectedMountains = (value) => {
    selectedMountainsRef.current = value;
    _setSelectedMountains(value);
  };

  const setHiScore = (value) => {
    hiScoreRef.current = value;
    _setHiScore(value);
  };

  const handleClick = (event, id) => {
    console.log(event);
    console.log(id);

    if (selectedMountainsRef.current.includes(id)) {
      console.log('Game Over');

      if (scoreRef.current > hiScore) {
        setHiScore(scoreRef.current);
      }

      setScore(0);
      setSelectedMountains([]);
      setCardDisplayKey(uniqueid());
    } else {
      setScore(scoreRef.current + 1);
      setSelectedMountains([...selectedMountainsRef.current, id]);

      if (scoreRef.current === mountains.length) {
        console.log('You Win');
        setScore(0);
        setSelectedMountains([]);
      }

      // This forces a remount
      setCardDisplayKey(uniqueid());
    }
  };

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

export default MemoryGame;
