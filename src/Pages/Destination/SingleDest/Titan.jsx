import NavbarDest from "../NavbarDest";
import { data } from "../../../data";
import "./SingleDest.css";

function Titan() {
  return (
    <div className="SingleDestBox" role="main">
      <div className="SingleDestBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.destinations[3].images.webp} />
          <img src={data.destinations[3].images.png} alt="moon" />
        </picture>
      </div>
      <div className="SingleDestBox-TxtBox">
        <NavbarDest />
        <h1 className="SingleDestBox-TxtBox-Title">
          {data.destinations[3].name}
        </h1>
        <p className="SingleDestBox-TxtBox-Para">
          {data.destinations[3].description}
        </p>
        <div className="SingleDestBox-TxtBox-StatsBox">
          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Distance">
              AVG. DISTANCE
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-DistanceVal">
              {data.destinations[3].distance}
            </strong>
          </div>

          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Time">
              EST. TRAVEL TIME
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-TimeVal">
              {data.destinations[3].travel}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Titan;
