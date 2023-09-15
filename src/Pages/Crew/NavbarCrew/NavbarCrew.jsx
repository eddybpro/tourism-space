import { NavLink } from "react-router-dom";
import "./NavbarCrew.css";

function NavbarCrew() {
  return (
    <nav className="NavbarCrew">
      <NavLink
        to="/crew"
        className={({ isActive }) =>
          isActive ? "NavbarCrew-CrewLink active" : "NavbarCrew-CrewLink"
        }
        end
      ></NavLink>
      <NavLink
        to="/crew/specialist"
        className={({ isActive }) =>
          isActive ? "NavbarCrew-CrewLink active" : "NavbarCrew-CrewLink"
        }
      ></NavLink>
      <NavLink
        to="/crew/engineer"
        className={({ isActive }) =>
          isActive ? "NavbarCrew-CrewLink active" : "NavbarCrew-CrewLink"
        }
        end
      ></NavLink>
      <NavLink
        to="/crew/pilot"
        className={({ isActive }) =>
          isActive ? "NavbarCrew-CrewLink active" : "NavbarCrew-CrewLink"
        }
        end
      ></NavLink>
    </nav>
  );
}
export default NavbarCrew;
