import NavbarDest from "../NavbarDest";
import { data } from "../../../data";
import "./SingleDest.css";

function Mars() {
  return (
    <div className="SingleDestBox">
      <div className="SingleDestBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.destinations[1].images.webp} />
          <img src={data.destinations[1].images.png} alt="moon" />
        </picture>
      </div>
      <div className="SingleDestBox-TxtBox">
        <NavbarDest />
        <h1 className="SingleDestBox-TxtBox-Title">
          {data.destinations[1].name}
        </h1>
        <p className="SingleDestBox-TxtBox-Para">
          {data.destinations[1].description}
        </p>
        <div className="SingleDestBox-TxtBox-StatsBox">
          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Distance">
              AVG. DISTANCE
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-DistanceVal">
              {data.destinations[1].distance}
            </strong>
          </div>

          <div>
            <p className="SingleDestBox-TxtBox-StatsBox-Time">
              EST. TRAVEL TIME
            </p>
            <strong className="SingleDestBox-TxtBox-StatsBox-TimeVal">
              {data.destinations[1].travel}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mars;
