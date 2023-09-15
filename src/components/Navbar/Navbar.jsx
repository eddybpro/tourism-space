import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

export default function Navbar({ handleClick }) {
  return (
    <nav className="Navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        onClick={handleClick}
      >
        00 Home
      </NavLink>
      <NavLink
        to="/destination"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        onClick={handleClick}
      >
        01 Destination
      </NavLink>
      <NavLink
        to="/crew"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        onClick={handleClick}
      >
        02 Crew
      </NavLink>
      <NavLink
        to="/tech"
        className={({ isActive }) => (isActive ? "link active" : "link")}
        onClick={handleClick}
      >
        03 Technology
      </NavLink>
    </nav>
  );
}

Navbar.propTypes = {
  handleClick: PropTypes.func,
};
