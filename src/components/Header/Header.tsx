import React from "react";
import logo from "../../assets/logo/Genix.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-white w-full h-14 fixed top-0 flex items-center justify-between px-5 shadow-sm z-30">
        <Link to={"/home"}>
          <img src={logo} alt="logo" className="w-36" />
        </Link>
        <div className="space-x-7">
          <NotificationsIcon className="text-[#a6a6a6] cursor-pointer" />
          <ChatIcon className="text-[#a6a6a6] cursor-pointer" />
          <Link to={"/"}>
            <Button variant="outlined" startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
