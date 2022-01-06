import React, { Component } from "react";

class PicItems extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-box">
          <div className="card-image">
            <img src={this.props.picture} alt="image" />
          </div>
          <div className="card-title">{this.props.title}</div>
          <div className="card-description">{this.props.description}</div>
          <a href="#">Learn More</a>
        </div>
      </React.Fragment>
    );
  }
}

export default PicItems;
