import React from 'react';
import { GetFlag } from '../Mountains';

const MountainCard = (props) => {
  const { name, height, image, countries, handleClick, id } = props;

  let flags = countries.map((country) => {
    return (
      <img
        src={GetFlag(country)}
        alt={country}
        key={`flag${country}${id}`}
        width='30px'
        height='30px'></img>
    );
  });

  return (
    <React.Fragment>
      <div
        onClick={(e) => {
          handleClick(e, id);
        }}>
        <img src={image} alt={name} width='150px' height='150px' />
        <div> {flags} </div>
        <div>{`${name} ${height}`}</div>
      </div>
    </React.Fragment>
  );
};

export default MountainCard;
