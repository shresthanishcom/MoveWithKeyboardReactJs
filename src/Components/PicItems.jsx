import React, { Component } from "react";

export default class PicItems extends Component {
  render() {
    return (
      <div className="pic-container">
        <div className="pic">
          <img src={this.props.picture} alt="sf" />
        </div>
        <div className="title">{this.props.title}</div>
        <div className="pic-description">{this.props.description}</div>
        <a href="#">LearnMore </a>
      </div>
    );
  }
}
