import React from "react";

import "./Navbar.sass";

const Navbar = () => {
  return (
    <nav>
      <div className="app__navbar">
        <div className="app__navbar__links">
          <a href="">About</a>
          <a href="">Portofolio</a>
        </div>
        <div>
          <a href="" className="app__navbar__logo">
            JAY
          </a>
        </div>
        <div className="app__navbar__links">
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
