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
        {/* <div className="heading_tile">Fri, 24/10/2015</div> */}
        <div className="heading_tile">
          <div>
            <p>Friday</p>
            <p>24/10/2025</p>
          </div>
        </div>
        <div className="heading_tile">
          <div>
            <p>Dist</p>
            <p className="units">{` (km)`}</p>
          </div>
        </div>
        {/* <div className="heading_tile">Time</div> */}
        <div className="heading_tile">
          <div>
            <p>Time</p>
            <p className="units">min:sec</p>
          </div>
        </div>
        <div className="heading_tile">
          <div>
            <p>Avg Pace</p>
            <p className="units">{`(min/km)`}</p>
          </div>
        </div>
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
