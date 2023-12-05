import React from "react";
import "./Main.css";
import cover from "./Component/Navbar/illustration-sign-up-desktop.svg";
import Navbar from "./Component/Navbar/navbar";

const MainApp = () => {
  return (
    <div className="App">
      <div className="section">
        <div className="nav1">
          <Navbar />
        </div>

        <div className="imagebox">
          <div className="imagemain">
            <img className="back" src={cover} alt="ij" />
          </div>
          <div className="imagemain1">
            <img className="back1" src={cover} alt="ij" />
          </div>
          
        </div>
        <div className="nav2">
            <Navbar />
          </div>
      </div>
    </div>
  );
};

export default MainApp;
