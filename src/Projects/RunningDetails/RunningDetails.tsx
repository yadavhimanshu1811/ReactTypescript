import RunningTile from "./RunningTile";

function RunningDetails() {
  const runningData = [
    { distance: 0.41, run_time: "01:18", time: "18:42" },
    { distance: 0.41, run_time: "01:18", time: "18:42" },
    { distance: 0.41, run_time: "01:18", time: "18:42" },
    { distance: 0.41, run_time: "01:18", time: "18:42" },
    { distance: 0.41, run_time: "01:18", time: "18:42" },
  ];

  return (
    <div
      className="d-flex bg-light justify-content-center align-items-center"
      style={{ height: "100vh", width: "30%" }}
    >
      <div
        className="p-4 bg-dark border rounded text-light"
        style={{ height: "90%", width: "90%" }}
      >
        <div className="d-flex justify-content-between border-bottom border-light-subtle">
          <p>Today, Oct 9</p>
          <div
            className="d-flex justify-content-between"
            style={{ width: "100px" }}
          >
            <p>10:36</p>
            <p>112 Cal</p>
          </div>
        </div>
        <div>
          {runningData.map((it) => (
            <RunningTile tileData={it} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RunningDetails;
