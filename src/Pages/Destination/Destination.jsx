import "./Destination.css";
import { Outlet } from "react-router-dom";

export default function Destination() {
  return (
    <div className="DestBox">
      <h1>01 PICK YOUR DESTINATION</h1>
      <Outlet />
    </div>
  );
}
