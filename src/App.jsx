import "./App.css";
import rightSideImg from "../src/assets/signin-right-img.png";
import vibeEverLogo from "../src/assets/vibeEver.png";

function App() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 bg-primary py-12 px-24 h-screen">
      <div className="border py-20 px-24">
        <p>content</p>
      </div>
      <div
        className="rounded-[25px] bg-cover bg-center"
        style={{ backgroundImage: `url(${rightSideImg})` }}
      ></div>
    </div>
  );
}

export default App;
