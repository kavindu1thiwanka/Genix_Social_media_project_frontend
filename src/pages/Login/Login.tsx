import React, { Component } from "react";
import "./login_page_style.css";
import { Checkbox, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo/Genix Logo.png";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { grey } from "@mui/material/colors";

export default class Login extends Component {
  render() {
    return (
      <div className="w-full min-h-screen bg-[#6B43C7] flex justify-center items-center">
        <div className="Login-board bg-white rounded-[40px] px-8 py-20 w-[60%] shadow-xl grid grid-cols-2 items-center">
          <div className="m-8">
            <img src={logo} alt="logo" className="w-auto" />
          </div>
          <div className="ml-20 mr-12">
            <h1 className="text-white mb-6 font-signup text-5xl">Sign in</h1>
            <form className="w-auto flex flex-col space-y-3">
              <label
                htmlFor="Email"
                className="label font-login-sub font-extrabold "
              >
                Email Address
              </label>

              <TextField
                className="TextField"
                inputProps={{ style: { color: "#b8b8b8" } }}
                type="email"
                variant="outlined"
                placeholder="Enter your email"
                fullWidth={true}
                focused={false}
                required
              />
              <label
                htmlFor="Password"
                className="label font-login-sub font-extrabold"
              >
                Password
              </label>
              <TextField
                className="TextField"
                inputProps={{ style: { color: "#b8b8b8" } }}
                type="password"
                variant="outlined"
                placeholder="Enter your password"
                fullWidth={true}
                focused={false}
                required
              />
              <div>
                <Checkbox
                  className="checkbox"
                  sx={{
                    color: grey[500],
                    "&.Mui-checked": {
                      color: grey[500],
                    },
                  }}
                />
                <label htmlFor="checkbox" className="label font-login-sub text-[#9e9e9e]">
                  Show Password
                </label>
              </div>
              <Link to={"/home"}>
                <button className="w-full bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mb-3 font-signup text-xl font-bold">
                  Sign In <EastRoundedIcon />
                </button>
              </Link>
              <div className="flex justify-center items-center">
                <div className="h-[1px] bg-white w-28 opacity-25" />
                <p className="label font-login-sub opacity-25 mx-4 text-lg">
                  or
                </p>
                <div className="h-[1px] bg-white w-28 opacity-25" />
              </div>
              <Link to={"/signup"}>
                <button className="w-full bg-accent-navy-200 text-white py-3 rounded border border-[#6B43C7] mt-3">
                  Create New Account
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
