import { useEffect, useState, useRef } from 'react';
import MountainCard from './MountainCard';
import '../styles/mountainCard.css';

const RandomCardDisplay = (props) => {
  const { mountains, handleClick, selectedMountains } = props;

  const mountainRef = useRef(mountains);
  const handleClickRef = useRef(handleClick);
  const selectedMountainsRef = useRef(selectedMountains);
  const [mountainsToDisplay, setMountainsToDisplay] = useState([]);

  // On Mount
  useEffect(() => {
    const randomMountains = [];
    const randomIndexes = [];
    for (let i = 0; i < 6; i++) {
      let duplicate = true;

      // No duplicates in display
      while (duplicate) {
        const index = Math.floor(Math.random() * mountainRef.current.length);
        if (!randomIndexes.includes(index)) {
          randomIndexes.push(index);
          randomMountains.push(mountainRef.current[index]);
          duplicate = false;
        }
      }
    }

    // Also, all mountains to display cannot be previously selected mountains, at least one must be new
    let atLeastOneNew = false;
    for (let i = 0; i < randomMountains.length; i++) {
      if (!selectedMountainsRef.current.includes(randomMountains[i].id)) {
        atLeastOneNew = true;
      }
    }

    if (!atLeastOneNew) {
      let isNew = false;
      while (!isNew) {
        const newRandomMountain =
          mountainRef.current[
            Math.floor(Math.random() * mountainRef.current.length)
          ];
        if (!selectedMountainsRef.current.includes(newRandomMountain.id)) {
          isNew = true;
          randomMountains.pop();
          randomMountains.push(newRandomMountain);
        }
      }

      //shuffle the array
      randomMountains.sort(() => Math.random() - 0.5);
    }

    const mountainCards = randomMountains.map((mt) => {
      return (
        <MountainCard
          handleClick={handleClickRef.current}
          name={mt.name}
          height={mt.height}
          image={mt.image}
          countries={mt.countries}
          id={mt.id}
          key={mt.id}
        />
      );
    });

    setMountainsToDisplay(mountainCards);
  }, []);

  return <div className='card-display'>{mountainsToDisplay}</div>;
};

export default RandomCardDisplay;
