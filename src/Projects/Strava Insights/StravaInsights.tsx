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
        <div className="heading_tile">
          <div>
            <p>24/10/2025</p>
            <p className="units">Friday</p>
          </div>
        </div>
        <div className="heading_tile">
          <div>
            <p>Dist</p>
            <p className="units">{` (km)`}</p>
          </div>
        </div>
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
          <Tile
            key={it.start_time}
            tileData={{
              name: it.name,
              distance: it.distance,
              moving_time: it.moving_time,
              moving_time_raw: it.moving_time_raw,
              distance_raw: it.distance_raw,
              start_time: it.start_time,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StravaInsights;
