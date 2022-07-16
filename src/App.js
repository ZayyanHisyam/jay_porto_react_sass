import React from "react";
import { Navbar, HomePage, About, MyWorks, Footer } from "./pages/index";

import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <MyWorks />
      <Footer />
    </div>
  );
};

export default App;
