import react from "react";
import "./Components/Css/main.css";
import Header from "./Components/Header";
import PicContent from "./Components/PicContent";
import Boxes from "./Components/Boxes";

function App() {
  return (
    <react.Fragment>
      <div className="container">
        <Header />
        <PicContent
          type="middle"
          title="Surface Deals"
          description="Select Surfaces are on sale now - save while supplies last"
        />
        <Boxes type="one" />
        <PicContent
          type="left"
          picture="https://i.ibb.co/tBJGPD9/xbox.png"
          title="Xbox Game Pass Ultimate"
          description="Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game."
        />
        <Boxes type="two" />
        <PicContent
          type="left"
          picture="https://i.ibb.co/72cgtsz/carbon.jpg"
          title="Xbox Game Pass Ultimate"
          description="Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game."
        />
        <span>
          Follow Microsoft
          <img src="./pictures/social-fb.png" alt="images" />
          <img src="./pictures/social-linkedin.png" alt="images" />
          <img src="./pictures/social-twitter.png" alt="images" />
        </span>
      </div>
    </react.Fragment>
  );
}
export default App;
