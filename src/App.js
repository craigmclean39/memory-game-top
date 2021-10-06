import MemoryGame from './components/MemoryGame';

const App = (props) => {
  const { mountains } = props;

  return <MemoryGame mountains={mountains} />;
};

export default App;
