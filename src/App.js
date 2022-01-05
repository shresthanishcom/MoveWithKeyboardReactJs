import react from "react";
import "./Components/Css/main.css";
import Header from "./Components/Header";
import PicContent from "./Components/PicContent";
import PicItems from "./Components/PicItems";
import Boxes from "./Components/Boxes";

function App() {
  return (
    <react.Fragment>
      <div className="container">
        <Header />
        <PicContent
          title="Surface Deals"
          description="Select Surfaces are on sale now - save while supplies last"
        />
        <Boxes />
      </div>
    </react.Fragment>
  );
}
export default App;
