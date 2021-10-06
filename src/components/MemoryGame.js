import React, { useRef } from 'react';
import { useState } from 'react';
import uniqueid from 'uniqid';
import Gameplay from './Gameplay';
import GameOver from './GameOver';
import GameStart from './GameStart';

const MemoryGame = (props) => {
  const { mountains } = props;

  const [score, _setScore] = useState(0);
  const scoreRef = useRef(score);

  const [hiScore, _setHiScore] = useState(0);
  const hiScoreRef = useRef(hiScore);

  const [selectedMountains, _setSelectedMountains] = useState([]);
  const selectedMountainsRef = useRef(selectedMountains);

  const [cardDisplayKey, setCardDisplayKey] = useState(uniqueid());
  const [isGameOver, setIsGameOver] = useState(false);
  const [wonGame, setWonGame] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [newGame, setNewGame] = useState(true);

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
    if (selectedMountainsRef.current.includes(id)) {
      setIsGameOver(true);
      setFinalScore(scoreRef.current);
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
        setIsGameOver(true);
        setWonGame(true);
        setScore(0);
        setSelectedMountains([]);
        setFinalScore(mountains.length);
      }

      // This forces a remount
      setCardDisplayKey(uniqueid());
    }
  };

  const restartGame = (e) => {
    setNewGame(false);
    setIsGameOver(false);
    setWonGame(false);
    setScore(0);
    setSelectedMountains([]);
    setFinalScore(0);
    setCardDisplayKey(uniqueid());
  };

  return newGame ? (
    <GameStart startGame={restartGame} />
  ) : !isGameOver ? (
    <Gameplay
      score={score}
      hiScore={hiScore}
      cardDisplayKey={cardDisplayKey}
      mountains={mountains}
      selectedMountains={selectedMountains}
      handleClick={handleClick}
    />
  ) : (
    <GameOver
      wonGame={wonGame}
      finalScore={finalScore}
      restartGame={restartGame}
    />
  );
};

export default MemoryGame;
