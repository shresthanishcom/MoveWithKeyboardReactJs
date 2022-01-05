import React, { Component } from "react";

export default class PicItems extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="picItems-box">
        <div className="picItems-pic">
          {/* <img
            src={`./pictures/${this.props.picture}`}
            alt="pictures in boxes"
          /> */}
        </div>
        <div className="picItems-title">{this.props.title}</div>
        <div className="picItems-description">{this.props.description}</div>
        <a href="#">LearnMore </a>
      </div>
    );
  }
}
