import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";

export default class Friends extends Component{
  render() {
    return (
      <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
        <Header />
        <div className="w-full flex flex-col">
         <Menu/>
          {/* Content Display Div */}
          <div className="w-5/6 pt-20">Friends</div>
        </div>
      </div>
    );
  }
}