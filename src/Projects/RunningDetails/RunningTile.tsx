interface Props {
  tileData: {
    distance: number;
    run_time: string;
    time: string;
  };
}

function RunningTile({tileData}: Props) {
    const {distance, time, run_time} = tileData;
  return (
    <div className="d-flex justify-content-between border-bottom border-light-subtle p-1" style={{width:"100%"}}>
      <div className="d-flex align-items-center">
        <img src="src/assets/run_image.png" alt="Girl in a jacket" width="35px" height="35px" />
        <div className="ms-2">
          <p className="mb-1">Running</p>
          <p className="mb-1">{distance}</p>
        </div>
      </div>
      <div>
        <p className="mb-1">{run_time}</p>
        <p className="mb-1">{time}</p>
      </div>
    </div>
  );
}
export default RunningTile;
