import NavbarCrew from "../NavbarCrew/NavbarCrew";
import "./CrewMember.css";
import { data } from "../../../data";

function Vector() {
  return (
    <div className="SingleCrewBox" role="main">
      <div className="SingleCrewBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.crew[2].images.webp} />
          <img src={data.crew[2].images.webp} alt={data.crew[2].name} />
        </picture>
      </div>
      <div className="SingleCrewBox-TxtBox">
        <p className="SingleCrewBox-TxtBox-Role">{data.crew[2].role}</p>
        <h1 className="SingleCrewBox-TxtBox-Name">{data.crew[2].name}</h1>
        <p className="SingleCrewBox-TxtBox-Bio">{data.crew[2].bio}</p>
        <NavbarCrew />
      </div>
    </div>
  );
}
export default Vector;
