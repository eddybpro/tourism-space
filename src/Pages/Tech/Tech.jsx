import { Outlet } from "react-router-dom";
import "./Tech.css";

export default function Tech() {
  return (
    <div className="TechBox">
      <h1>03 SPACE LAUNCH 101</h1>
      <Outlet />
    </div>
  );
}
