const Tile = (props) => {
  const { tileData } = props;
  const { name, distance, moving_time, moving_time_raw, distance_raw, start_time } =
    tileData;

  const paceMinPerKm = (
    distanceMeters: number,
    timeSeconds: number
  ): string => {
    const pace = ((timeSeconds / distanceMeters) * 1000) / 60; // minutes per km
    const minutes = Math.floor(pace);
    const seconds = Math.round((pace - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const convertStartTime = () => {
    const isoString = start_time;
    const date = new Date(isoString);

    const timeString = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
      hour12: true,
    });

    return timeString;

    // console.log(timeString); // 👉 "6:51:50 PM" (depending on your timezone)
  };
  return (
    <div className="tile">
      <div className="date_type_div">
        <img src="src/assets/run_image.png" width="35px" height="35px" />
        {/* <div>{name}</div> */}
        <div>{convertStartTime()}</div>
      </div>
      <div className="tile_item">{distance}</div>
      <div className="tile_item">{moving_time}</div>
      {/* <div className="tile_item">{((moving_time_raw*1000)/(distance_raw*60)).toFixed(2)}</div> */}
      <div className="tile_item">
        {paceMinPerKm(distance_raw, moving_time_raw)}
      </div>
    </div>
  );
};

export default Tile;
