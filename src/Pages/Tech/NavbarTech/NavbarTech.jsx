import { NavLink } from "react-router-dom";
import "./NavbarTech.css";

function NavbarTech() {
  return (
    <nav className="NavbarTech">
      <NavLink
        to="/tech"
        className={({ isActive }) =>
          isActive ? "NavbarTech-TechLink active" : "NavbarTech-TechLink"
        }
        end
      >
        1
      </NavLink>
      <NavLink
        to="/tech/spaceport"
        className={({ isActive }) =>
          isActive ? "NavbarTech-TechLink active" : "NavbarTech-TechLink"
        }
        end
      >
        2
      </NavLink>
      <NavLink
        to="/tech/vehicle"
        className={({ isActive }) =>
          isActive ? "NavbarTech-TechLink active" : "NavbarTech-TechLink"
        }
        end
      >
        3
      </NavLink>
    </nav>
  );
}
export default NavbarTech;
