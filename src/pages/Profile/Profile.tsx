import React, { Component } from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import cover from "../../assets/img/cover.jpg";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./profile.css";
import { userDetails } from "../../pages/Login/Login";

export default class Profile extends Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
        <Header />
        <div className="w-full flex flex-row">
          <Menu />
          {/* Content Display Div */}
          <div className="w-5/6 pt-20 px-5 py-6 flex justify-center h-screen">
            <div className="scroll bg-white rounded-lg w-full shadow-sm overflow-scroll relative">
              {/* Cover Image */}
              <div className="w-full h-44 items-center flex justify-center border">
                <img src={cover} alt="Cover Image" className="w-full h-full" />
              </div>

              {/* Profile Photo */}
              <div className="mb-5">
                <div className="z-20 absolute border w-36 h-36 rounded-full flex items-center justify-center text-center cursor-pointer top-[8.4rem] ml-12">
                  <img src={userDetails.userImg} alt="img" className="rounded-full" />
                </div>
                <div className="ml-52 mt-2 flex flex-row justify-between pr-5">
                  <div className="w-1/3">
                    <p className="font-roboto font-bold select-none text-xl">
                      Kavindu Thiwanka
                    </p>
                    <p className="font-roboto text-sm text-[#0000006d] select-none">
                      @kavindu
                    </p>
                    <p className="font-roboto font-semibold select-none cursor-pointer hover:underline text-[#0000006d]">
                      2K friends
                    </p>
                  </div>
                  <div className="w-2/3 text-sm pt-5">
                    <p>
                      Hey, I'm Kavindu Thiwanka! 👋 I'm a free spirit 🕊️ who
                      loves exploring new ideas and meeting new people 🌍. I
                      believe life is a beautiful journey, and we should make
                      the most of every moment 💫.
                    </p>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div className="flex flex-row px-5 py-6 ml-12 mt-12 space-x-28">
                <div className="space-y-3">
                  <p className="font-roboto font-extrabold text-xl text-[#000000] mb-3">
                    Basic Info
                  </p>
                  <div className="flex flex-col space-y-3 ml-4">
                    <div className="flex flex-row space-x-3 items-center">
                      <PersonIcon className="icon" />
                      <div>
                        <p>Male</p>
                        <p className="text-xs">Gender</p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-3 items-center">
                      <CakeIcon className="icon" />
                      <div>
                        <p>23rd October 2001</p>
                        <p className="text-xs">Birthday</p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-3 items-center">
                      <FavoriteRoundedIcon className="icon" />
                      <div>
                        <p>Single</p>
                        <p className="text-xs">Relationship</p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-3 items-center">
                      <HomeRoundedIcon className="icon" />
                      <div>
                        <p>Galle</p>
                        <p className="text-xs">Places lived</p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-3 items-center">
                      <SchoolRoundedIcon className="icon" />
                      <div>
                        <p>Software Engineer at IJSE</p>
                        <p className="text-xs">Education</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-roboto font-extrabold text-xl text-[#000000] mb-3">
                    Contact Info
                  </p>
                  <div className="flex flex-col space-y-3 ml-4">
                    <div className="flex flex-row space-x-3 items-center">
                      <MailIcon className="icon" />
                      <div>
                        <p>kavidu12thiwanka@gmail.com</p>
                        <p className="text-xs">Email</p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-3 items-center">
                      <LocalPhoneIcon className="icon" />
                      <div>
                        <p>+94764669150</p>
                        <p className="text-xs">Mobile Phone</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
