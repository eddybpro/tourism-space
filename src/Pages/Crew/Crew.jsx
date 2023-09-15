import { Outlet } from "react-router-dom";
import "./Crew.css";

export default function Crew() {
  return (
    <div className="CrewBox">
      <h1>02 MEET YOUR CREW</h1>
      <Outlet />
    </div>
  );
}
