import { Link } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <section className="ErrorSection" role="main">
      <h2 className="ErrorSection-Title">404</h2>
      <p className="ErrorSection-Para">page not found</p>
      <Link to="/" className="ErrorSection-Link">
        back home
      </Link>
    </section>
  );
}
export default Error;
