import react from "react";
import "./Components/Css/main.css";
import Header from "./Components/Header";
import PicContent from "./Components/PicContent";
import PicItems from "./Components/PicItems";

function App() {
  return (
    <react.Fragment>
      <div className="container">
        <Header />
        <PicContent
          title="Surface Deals"
          description="Select Surfaces are on sale now - save while supplies last"
        />
        <PicItems
          picture="/card1.png"
          title="New Surface Pro 7"
          description="See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play."
        />
      </div>
    </react.Fragment>
  );
}
export default App;
