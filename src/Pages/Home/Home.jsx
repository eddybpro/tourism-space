import "./Home.css";

function Home() {
  return (
    <div className="HomeBox" role="main">
      <div className="HomeBox-TxtBox" role="article">
        <h1 className="HomeBox-TxtBox-Title">
          so, you want to travel to <span>space</span>
        </h1>
        <p className="HomeBox-TxtBox-Para">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <button className="HomeBox-Btn">explore</button>
    </div>
  );
}
export default Home;
