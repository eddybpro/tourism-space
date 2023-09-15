import NavbarDest from "../NavbarDest";
import { data } from "../../../data";
import "./SingleDest.css";

function Moon() {
  return (
    <div className="SingleDestBox">
      <div className="SingleDestBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.destinations[0].images.webp} />
          <img src={data.destinations[0].images.png} alt="moon" />
        </picture>
      </div>
      <div className="SingleDestBox-TxtBox">
        <NavbarDest />
        <h1 className="SingleDestBox-TxtBox-Title">
          {data.destinations[0].name}
        </h1>
        <p className="SingleDestBox-TxtBox-Para">
          {data.destinations[0].description}
        </p>
        <div className="SingleDestBox-TxtBox-StatsBox">
          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Distance">
              AVG. DISTANCE
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-DistanceVal">
              {data.destinations[0].distance}
            </strong>
          </div>

          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Time">
              EST. TRAVEL TIME
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-TimeVal">
              {data.destinations[0].travel}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Moon;
