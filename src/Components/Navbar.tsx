import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%" }}>
      <nav className="navbar navbar-expand-lg  bg-light w-100 justify-content-between color-white">
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/todolist"
          >
            Todo App
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/instagramDetails"
          >
            Instagram Details
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/runningDetails"
          >
            Running Details
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/stravaInsights"
          >
            StravaInsights
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/weatherApp"
          >
            Weather App
          </NavLink>
        </div>
        <div className="mx-2">
          <NavLink
            className={(e) => (e.isActive ? "btn btn-danger" : "")}
            to="/logout"
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
