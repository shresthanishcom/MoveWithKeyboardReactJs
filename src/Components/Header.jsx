import react from "react";
import "./Css/main.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./pictures/logo.png" alt="microsoft logo" />
      </div>
      <div className="links">
        <ul>
          <li>Office</li>
          <li>Windows</li>
          <li>Surface</li>
          <li>Xbox</li>
          <li>Deals</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="navigation">
        <i className="fas fa-search"></i>
        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
      </div>
      <div className="toggleBtn">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
  );
}
