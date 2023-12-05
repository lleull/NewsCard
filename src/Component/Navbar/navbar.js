import React from "react";
import "./navbar.css";
import Inputcomp from "../Main/inputs/Inputcomp";
import image from "./icon-success.svg";

const Navbar = (props) => {
  return (
    <div className="header">
      <div className="mainpage">
        <div>
          {" "}
          <h1>Stay Updated!</h1>
          <div className="joinpart">
            join 60,000+ product managers receiving monthly updates on{" "}
          </div>
          <div className="paragraph">
            <div className="joinpart1">
              <img className="imgsuc" src={image} alt="data" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="joinpart1">
              <img className="imgsuc" src={image} alt="data" />
              <p> Measuring to ensure updates are a success</p>
            </div>
            <div className="joinpart1">
              <img className="imgsuc" src={image} alt="data" />
              <p>And much more!</p>
            </div>
          </div>
        </div>

        <Inputcomp />
      </div>
    </div>
  );
};

export default Navbar;
