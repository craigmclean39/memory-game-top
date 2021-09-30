const MountainCard = (props) => {
  const { name, height, imagePath } = props;
  return <div>{`${name} ${height} ${imagePath}`}</div>;
};

export default MountainCard;
