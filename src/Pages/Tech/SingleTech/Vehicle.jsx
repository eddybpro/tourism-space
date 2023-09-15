import NavbarTech from "../NavbarTech/NavbarTech";
import { data } from "../../../data";
import "./SingleTech.css";

function Vehicle() {
  return (
    <div className="SingleTech">
      <div className="SingleTech-ImgBox">
        <picture>
          <source
            type="image/webp"
            srcSet={data.technology[0].images.portrait}
          />
          <img
            src={data.technology[0].images.landscape}
            alt={data.technology[0].name}
          />
        </picture>
      </div>
      <div className="SingleTech-TxtBox">
        <div>
          <h1 className="SingleTech-TxtBox-Name">{data.technology[0].name}</h1>
          <p className="SingleTech-TxtBox-Desc">
            {data.technology[0].description}
          </p>
        </div>
        <NavbarTech />
      </div>
    </div>
  );
}
export default Vehicle;
