import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  Mountain,
  mountainNames,
  mountainHeights,
  mountainImagePaths,
} from './Mountains';
import uniqid from 'uniqid';

const mountains = [];
const generateMountains = () => {
  for (let i = 0; i < mountainNames.length; i++) {
    const mountain = new Mountain(
      mountainNames[i],
      mountainHeights[i],
      mountainImagePaths[i],
      uniqid()
    );
    mountains.push(mountain);
  }
};

generateMountains();

ReactDOM.render(
  <React.StrictMode>
    <App mountains={mountains} />
  </React.StrictMode>,
  document.getElementById('root')
);
