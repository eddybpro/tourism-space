import NavbarCrew from "../NavbarCrew/NavbarCrew";
import "./CrewMember.css";
import { data } from "../../../data";

function Mark() {
  return (
    <div className="SingleCrewBox" role="main">
      <div className="SingleCrewBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.crew[1].images.webp} />
          <img src={data.crew[1].images.webp} alt={data.crew[1].name} />
        </picture>
      </div>
      <div className="SingleCrewBox-TxtBox">
        <p className="SingleCrewBox-TxtBox-Role">{data.crew[1].role}</p>
        <h1 className="SingleCrewBox-TxtBox-Name">{data.crew[1].name}</h1>
        <p className="SingleCrewBox-TxtBox-Bio">{data.crew[1].bio}</p>
        <NavbarCrew />
      </div>
    </div>
  );
}
export default Mark;
