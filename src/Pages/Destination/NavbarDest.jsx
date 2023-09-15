import { NavLink } from "react-router-dom";
import "./NavbarDest.css";

function NavbarDest() {
  return (
    <nav className="NavbarDest">
      <NavLink
        to="/destination"
        className={({ isActive }) =>
          isActive ? "NavbarDest-LinkDest active" : "NavbarDest-LinkDest"
        }
        end
      >
        Moon
      </NavLink>
      <NavLink
        to="/destination/mars"
        className={({ isActive }) =>
          isActive ? "NavbarDest-LinkDest active" : "NavbarDest-LinkDest"
        }
        end
      >
        Mars
      </NavLink>
      <NavLink
        to="/destination/europa"
        className={({ isActive }) =>
          isActive ? "NavbarDest-LinkDest active" : "NavbarDest-LinkDest"
        }
        end
      >
        Europa
      </NavLink>
      <NavLink
        to="/destination/titan"
        className={({ isActive }) =>
          isActive ? "NavbarDest-LinkDest active" : "NavbarDest-LinkDest"
        }
        end
      >
        Titan
      </NavLink>
    </nav>
  );
}
export default NavbarDest;
