import React from "react";

let inlineStyle = {
  backgroundImage: "url(https://i.ibb.co/tBJGPD9/xbox.png)",
};
//yo inline nai garda kina milena background image

export default (props) => {
  let { type } = props;
  console.log(type);
  if (type == "middle") {
    return (
      <div className="pic-content">
        <div className="pic-detail">
          <div className="pic-title">{props.title}</div>
          <div className="pic-description">{props.description}</div>
          <button>Shop Now </button>
        </div>
      </div>
    );
  } else if (type == "left") {
    return (
      <React.Fragment>
        <div
          className="left-content"
          style={{
            backgroundImage: `url(${props.picture})`,
          }}
        >
          <div className="left-detail">
            <div className="left-title">{props.title}</div>
            <div className="left-description">{props.description}</div>
            <button>Join Now</button>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (type == "nature-left") {
    return (
      <React.Fragment>
        <div
          className="left-content"
          style={{
            backgroundImage: `url(${props.picture})`,
          }}
        >
          <div className="left-detail">
            <div className="left-title" style={{ textColor: "white" }}>
              {props.title}
            </div>
            <div className="left-description">{props.description}</div>
            <button>Join Now</button>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return <div className="div"></div>;
  }
};
