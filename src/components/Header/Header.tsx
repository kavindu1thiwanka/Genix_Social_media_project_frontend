import React, { Component } from "react";
import logo from "../../assets/logo/Genix.png";

export default class extends Component {
  render() {
    return (
      <>
        <div className="bg-white w-full h-14 fixed top-0 flex items-center border-b-2 z-30">
          <img src={logo} alt="logo" className="w-36 ml-5" />
        </div>
      </>
    );
  }
}
