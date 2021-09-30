import { useEffect, useState, useRef } from 'react';
import MountainCard from './MountainCard';

const RandomCardDisplay = (props) => {
  const { mountains } = props;

  const mountainRef = useRef(mountains);
  const [mountainsToDisplay, setMountainsToDisplay] = useState([]);

  useEffect(() => {
    console.log('Mounting RandomCardDisplay');

    const randomMountains = [];
    const randomIndexes = [];
    for (let i = 0; i < 5; i++) {
      let duplicate = true;

      while (duplicate) {
        const index = Math.floor(Math.random() * mountainRef.current.length);
        if (!randomIndexes.includes(index)) {
          randomIndexes.push(index);
          randomMountains.push(mountainRef.current[index]);
          duplicate = false;
        }
      }
    }

    const mountainCards = randomMountains.map((mt) => {
      return (
        <MountainCard
          name={mt.name}
          height={mt.height}
          imagePath={mt.imagePath}
          key={mt.id}
        />
      );
    });

    setMountainsToDisplay(mountainCards);
  }, []);

  return <div>{mountainsToDisplay}</div>;
};

export default RandomCardDisplay;
