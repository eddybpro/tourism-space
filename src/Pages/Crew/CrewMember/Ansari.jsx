import NavbarCrew from "../NavbarCrew/NavbarCrew";
import "./CrewMember.css";
import { data } from "../../../data";

function Ansari() {
  return (
    <div className="SingleCrewBox" role="main">
      <div className="SingleCrewBox-ImgBox">
        <picture>
          <source type="image/webp" srcSet={data.crew[3].images.webp} />
          <img src={data.crew[3].images.webp} alt={data.crew[3].name} />
        </picture>
      </div>
      <div className="SingleCrewBox-TxtBox">
        <p className="SingleCrewBox-TxtBox-Role">{data.crew[3].role}</p>
        <h1 className="SingleCrewBox-TxtBox-Name">{data.crew[3].name}</h1>
        <p className="SingleCrewBox-TxtBox-Bio">{data.crew[3].bio}</p>
        <NavbarCrew />
      </div>
    </div>
  );
}
export default Ansari;
