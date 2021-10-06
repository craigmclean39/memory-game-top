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

  let topFlag = flags[0];
  let bottomFlag = flags[0];
  if (flags.length > 1) {
    bottomFlag = flags[1];
  }

  return (
    <React.Fragment>
      <div
        className='mountain-card shadow'
        onClick={(e) => {
          handleClick(e, id);
        }}>
        <div className='mountain-card--flag-top'>{topFlag}</div>
        <div className='mountain-card--content'>
          <img
            className='mountain-card--image'
            src={image}
            alt={name}
            width='150px'
            height='150px'
          />
          <div className='mountain-card--details'>
            <h6>{name}</h6>
            <h6>{`${height}m`}</h6>
          </div>
        </div>
        <div className='mountain-card--flag-bottom'>{bottomFlag}</div>
      </div>
    </React.Fragment>
  );
};

export default MountainCard;
