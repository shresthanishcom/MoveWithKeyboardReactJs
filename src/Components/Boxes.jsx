import React, { Component } from "react";
import PicItems from "./PicItems";

export default function Boxes() {
  return (
    <React.Fragment>
      <div className="card-container">
        <PicItems
          picture="./pictures/card1.png"
          title="something"
          description="hellowlakjslfjjsdfj"
        />
        <PicItems
          picture="./pictures/card1.png"
          title="something"
          description="hellowlakjslfjjsdfj"
        />
        <PicItems
          picture="./pictures/card1.png"
          title="something"
          description="hellowlakjslfjjsdfj"
        />
        <PicItems
          picture="./pictures/card1.png"
          title="something"
          description="hellowlakjslfjjsdfj"
        />
      </div>
    </React.Fragment>
  );
}
