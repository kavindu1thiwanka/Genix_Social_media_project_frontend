import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";

export default class Home extends Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
        <Header />
        <div className="w-full flex flex-col">
          <Menu />
          <div className="w-5/6 flex flex-col">
            <div className="w-2/3 bg-black"></div>
            <div className="w-1/3 bg-red"></div>
          </div>
        </div>
      </div>
    );
  }
}
