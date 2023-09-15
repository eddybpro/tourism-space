import NavbarTech from "../NavbarTech/NavbarTech";
import { data } from "../../../data";
import "./SingleTech.css";

function Capsule() {
  return (
    <div className="SingleTech">
      <div className="SingleTech-ImgBox">
        <picture>
          <source
            type="image/webp"
            srcSet={data.technology[2].images.portrait}
          />
          <img
            src={data.technology[2].images.landscape}
            alt={data.technology[2].name}
          />
        </picture>
      </div>
      <div className="SingleTech-TxtBox">
        <div>
          <h1 className="SingleTech-TxtBox-Name">{data.technology[2].name}</h1>
          <p className="SingleTech-TxtBox-Desc">
            {data.technology[2].description}
          </p>
        </div>
        <NavbarTech />
      </div>
    </div>
  );
}
export default Capsule;
