import React, { Component } from "react";
import accImg from "../../assets/img/acc.jpeg";
import { NavLink } from "react-router-dom";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default class Menu extends Component {
  render() {
    const activeLink = "text-[#6B43C7] rounded-xl";
    const normalLink = "cursor-pointer text-black";

    return (
      <div className="border-r-2 h-screen pt-20 bg-white w-1/6">
        <div className="rounded-xl border mx-5 py-3 px-3 flex flex-row space-x-4">
          <div className="border w-12 h-12 rounded-full flex items-center justify-center text-center">
            <img src={accImg} alt="img" className="rounded-full" />
          </div>
          <div>
            <p className="font-roboto font-bold">Kavindu Thiwanka</p>
            <p className="font-roboto text-sm text-[#0000006d]">@kavindu</p>
          </div>
        </div>

        <div>
          <nav className="flex flex-col space-y-9 ml-5 mt-8 font-roboto font-semibold text-md">
            <NavLink
              to={"/home"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <WebOutlinedIcon className="mr-3" /> Feed
            </NavLink>
            <NavLink
              to={"/friends"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <GroupRoundedIcon className="mr-3" /> Friends
            </NavLink>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <PersonRoundedIcon className="mr-3" /> Profile
            </NavLink>
            <NavLink
              to={"/events"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <EventNoteRoundedIcon className="mr-3" /> Events
            </NavLink>
            <NavLink
              to={"/setting"}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <SettingsRoundedIcon className="mr-3" /> Setting
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }
}