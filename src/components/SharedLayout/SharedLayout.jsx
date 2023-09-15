import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/sharedIcons/logo.svg";
import Hamburger from "../../assets/sharedIcons/icon-hamburger.svg";
import Close from "../../assets/sharedIcons/icon-close.svg";
import "./SharedLayout.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function SharedLayout() {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu((prev) => !prev);
  };
  const isLarge = window.innerWidth >= 901;

  return (
    <>
      <div className={menu && !isLarge ? "Head HeadBlur" : "Head"}>
        <Link to="/" role="navigation" aria-label="space-tourism">
          <img src={Logo} alt="space tourism" className="Head-Logo" />
        </Link>
        {isLarge ? (
          <Navbar handleClick={handleClick} />
        ) : (
          menu && <Navbar handleClick={handleClick} />
        )}
        {menu ? (
          <button className="Head-HamburgerBtn">
            <img src={Close} alt="" onClick={handleClick} />
          </button>
        ) : (
          <button className="Head-HamburgerBtn">
            <img src={Hamburger} alt="" onClick={handleClick} />
          </button>
        )}
      </div>

      <Outlet />
    </>
  );
}
export default SharedLayout;
