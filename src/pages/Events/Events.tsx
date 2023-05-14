import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";

function Event() {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
      <Header />
      <div className="w-full flex flex-row">
        <Menu />
        {/* Content Display Div */}
        <div className="w-5/6 pt-20 px-5 py-6 flex justify-center h-screen">
          <div className="scroll bg-black rounded-lg w-full shadow-sm overflow-scroll px-5 flex justify-center items-center text-center font-roboto font-extrabold text-2xl text-yellow-500 border border-white">
            UNDER MAINTENANCE !
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
