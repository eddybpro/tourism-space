import NavbarCrew from "../NavbarCrew/NavbarCrew";
import "./CrewMember.css";
import { data } from "../../../data";

function Douglas() {
  return (
    <div className="SingleCrewBox">
      <div className="SingleCrewBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.crew[0].images.webp} />
          <img src={data.crew[0].images.webp} alt={data.crew[0].name} />
        </picture>
      </div>
      <div className="SingleCrewBox-TxtBox">
        <p className="SingleCrewBox-TxtBox-Role">{data.crew[0].role}</p>
        <h1 className="SingleCrewBox-TxtBox-Name">{data.crew[0].name}</h1>
        <p className="SingleCrewBox-TxtBox-Bio">{data.crew[0].bio}</p>
        <NavbarCrew />
      </div>
    </div>
  );
}
export default Douglas;
