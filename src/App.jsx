import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Crew from "./Pages/Crew/Crew";
import Destination from "./Pages/Destination/Destination";
import Tech from "./Pages/Tech/Tech";
import Error from "./Pages/Error/Error";
import Moon from "./Pages/Destination/SingleDest/Moon";
import Mars from "./Pages/Destination/SingleDest/Mars";
import Europa from "./Pages/Destination/SingleDest/Europa";
import Titan from "./Pages/Destination/SingleDest/Titan";
import Douglas from "./Pages/Crew/CrewMember/Douglas";
import Mark from "./Pages/Crew/CrewMember/Mark";
import Ansari from "./Pages/Crew/CrewMember/Ansari";
import Vector from "./Pages/Crew/CrewMember/Vector";
import Capsule from "./Pages/Tech/SingleTech/Capsule";
import SpacePort from "./Pages/Tech/SingleTech/SpacePort";
import Vehicle from "./Pages/Tech/SingleTech/Vehicle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path="destination" element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path="/destination/mars" element={<Mars />} />
            <Route path="/destination/europa" element={<Europa />} />
            <Route path="/destination/titan" element={<Titan />} />
          </Route>

          <Route path="crew" element={<Crew />}>
            <Route index element={<Douglas />} />
            <Route path="/crew/specialist" element={<Mark />} />
            <Route path="/crew/engineer" element={<Ansari />} />
            <Route path="/crew/pilot" element={<Vector />} />
          </Route>

          <Route path="tech" element={<Tech />}>
            <Route index element={<Capsule />} />
            <Route path="/tech/spaceport" element={<SpacePort />} />
            <Route path="/tech/vehicle" element={<Vehicle />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
