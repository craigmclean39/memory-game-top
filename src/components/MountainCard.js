import React from 'react';

const MountainCard = (props) => {
  const { name, height, image, handleClick, id } = props;
  return (
    <React.Fragment>
      <div
        onClick={(e) => {
          handleClick(e, id);
        }}>
        <img src={image} alt={name} width='300px' height='300px' />
        <div>{`${name} ${height}`}</div>
      </div>
    </React.Fragment>
  );
};

export default MountainCard;
