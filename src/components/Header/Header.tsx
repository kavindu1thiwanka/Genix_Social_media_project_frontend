import React from "react";
import logo from "../../assets/logo/Genix.png";

function Header() {
  return (
    <>
      <div className="bg-white w-full h-14 fixed top-0 flex items-center shadow-sm z-30">
        <img src={logo} alt="logo" className="w-36 ml-5" />
      </div>
    </>
  );
}

export default Header;
