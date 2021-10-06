import React from 'react';
import { GetFlag } from '../Mountains';
import '../styles/mountainCard.css';

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
        className='mountain-card'
        onClick={(e) => {
          handleClick(e, id);
        }}>
        <h6>{name}</h6>
        <h6>{`${height}m`}</h6>
        <img
          className='mountain-card--image'
          src={image}
          alt={name}
          width='150px'
          height='150px'
        />
        <div className='mountain-card--flags'> {flags} </div>
      </div>
    </React.Fragment>
  );
};

export default MountainCard;
