import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-4xl">Save Most Of Your Money</h2>
      <p>By giving your money to me !!!</p>
    </div>
  );
};

export default Header;
