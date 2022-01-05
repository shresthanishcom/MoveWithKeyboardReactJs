import react from "react";

export default (props) => {
  return (
    <div className="pic-content">
      <div className="pic-detail">
        <div className="pic-title">{props.title}</div>
        <div className="pic-description">{props.description}</div>
        <button>Shop Now </button>
      </div>
    </div>
  );
};
