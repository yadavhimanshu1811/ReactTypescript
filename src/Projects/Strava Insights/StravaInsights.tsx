import React, { useEffect } from "react";
import StravaData from "./StravaData";
import Tile from "./Tile";
import "./StravaInsights.css"; // ✅ Import the CSS file

const StravaInsights = () => {
  const runningData = StravaData.models || [];

  useEffect(() => {
    console.log("Strava Data", StravaData);
  }, []);

  return (
    <div className="container-div">
      <h2>Himanshu's Running Details:</h2>
      <div className="tile">
        <div className="date_type_div">
          Fri, 24/10/2015
        </div>
        <div className="tile_item">{`Dist (km)`}</div>
        <div className="tile_item">Time</div>
        <div className="tile_item">Avg Pace</div>
      </div>
      <div className="tiles_div">
        {runningData.map((it) => (
          <Tile tileData={it} />
        ))}
      </div>
    </div>
  );
};

export default StravaInsights;
