import React, { Component } from "react";
import PicItems from "./PicItems";

export default function Boxes(props) {
  if (props.type == "one") {
    return (
      <React.Fragment>
        <div className="card-container">
          <PicItems
            picture="./pictures/card1.png"
            title="New Surface Pro 7"
            description="See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play."
          />
          <PicItems
            picture="./pictures/card2.png"
            title="New Surface Laptop 3"
            description="Express yourself powerfully with a thin, light, and elegant design, faster performance, and up to 11.5 hours battery life."
          />
          <PicItems
            picture="./pictures/card3.png"
            title="Save $150 + free controller"
            description="Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349."
          />
          <PicItems
            picture="./pictures/card4.png"
            title="The new Microsoft Edge"
            description="Expect more. World class performance, with more privacy, more productivity, and more value."
          />
        </div>
      </React.Fragment>
    );
  } else if (props.type == "two") {
    return (
      <React.Fragment>
        <div className="card-container">
          <PicItems
            picture="./pictures/card5.png"
            title="New Surface Pro 7"
            description="See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play."
          />
          <PicItems
            picture="./pictures/card6.png"
            title="New Surface Laptop 3"
            description="Express yourself powerfully with a thin, light, and elegant design, faster performance, and up to 11.5 hours battery life."
          />
          <PicItems
            picture="./pictures/card7.png"
            title="Save $150 + free controller"
            description="Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349."
          />
          <PicItems
            picture="./pictures/card8.png"
            title="The new Microsoft Edge"
            description="Expect more. World class performance, with more privacy, more productivity, and more value."
          />
        </div>
      </React.Fragment>
    );
  } else {
    return <div>nothing something is missing</div>;
  }
}
