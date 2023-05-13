import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import "./friends.css";
import Friend_btn from "../../components/Friend_btn";

export default class Friends extends Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
        <Header />
        <div className="w-full flex flex-row">
          <Menu />
          {/* Content Display Div */}
          <div className="scroll w-5/6 pt-20 px-5 py-2 pb-6 flex flex-col text-left space-y-3 h-screen">
            <h1 className="font-roboto font-extrabold text-2xl">FRIENDS</h1>
            <div className="scroll overflow-scroll space-y-3">
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            <Friend_btn />
            </div>
            {/* <div className="bg-white rounded-lg w-full h-24 py-3 px-4 shadow-sm space-y-2">
              <h1 className="font-roboto font-extrabold text-2xl">FRIENDS</h1>
              <Friend_btn />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
