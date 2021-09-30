import MountainCard from './components/MountainCard';
import RandomCardDisplay from './components/RandomCardDisplay';
import { useState } from 'react';

const App = (props) => {
  const { mountains } = props;

  const [mounted, setMounted] = useState(false);

  const toggleMounted = () => {
    if (mounted) {
      setMounted(false);
    } else {
      setMounted(true);
    }
  };

  const mountainCards = mountains.map((mountain) => {
    return (
      <MountainCard
        name={mountain.name}
        height={mountain.height}
        imagePath={mountain.imagePath}
        key={mountain.id}
      />
    );
  });

  return (
    <div className='App'>
      <button onClick={toggleMounted}>Mount/UnMount</button>
      {mounted ? <RandomCardDisplay mountains={mountains} /> : null}
    </div>
  );
};

export default App;
