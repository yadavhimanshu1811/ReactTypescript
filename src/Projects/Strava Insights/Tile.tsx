const Tile = (props) => {
  const { tileData } = props;
  const { name, start_date, distance, moving_time } = tileData;
  return (
    <div className="tile">
      <div className="date_type_div">
        <img src="src/assets/run_image.png" width="35px" height="35px" />
        <div>{name}</div>
      </div>
      <div className="tile_item">{distance}</div>
      <div className="tile_item">{moving_time}</div>
      <div className="tile_item">{moving_time}</div>
    </div>
  );
};

export default Tile;
