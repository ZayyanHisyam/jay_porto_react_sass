import React from "react";

import CharDesign from "../../assets";
import "./HomePage.sass";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="app__homepage">
          <div className="app__homepage__img">
            <img scr={CharDesign} alt=''/>
          </div>
          <div className="app__homepage__text">
            <p>love What</p> 
            <p>you do</p>
            <p className="text__stroke">do what </p>
            <p className="text__stroke">you love</p>
          </div>
        </div>
        <div className="footer__page">
          <div className="block__footer"></div>
          <p className="text__footer">HomePage</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
