import React, { useState } from "react";
import "./login_page_style.css";
import { Checkbox, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/logo/Genix Logo.png";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { grey } from "@mui/material/colors";
import jwt from "jwt-decode";
import api from "../../axios";

let userDetails: any;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };
  const passwordInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((event.target as HTMLInputElement).value);
  };

  const checkLogin = () => {
    api
      .get(`user/${email}&${password}`)
      .then((res) => {
        const token = res.data.responseData;
        if (token) {
          const decoded = jwt(token) as Object;
          const arr = Object.values(decoded);
          userDetails = {
            id: arr[0],
            user_id: arr[1],
            name: arr[2],
            bday: arr[3],
            address: arr[4],
            conact: arr[5],
            gender: arr[6],
            userImg: arr[7],
          };
          navigate("/home");
        } else {
          alert("Check Your Email or Password..!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full min-h-screen bg-[#6B43C7] flex justify-center items-center">
      <div className="Login-board bg-white rounded-[40px] px-8 py-14 w-[65%] shadow-xl grid grid-cols-2 items-center">
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
              onChange={emailInputHandler}
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
              onChange={passwordInputHandler}
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
              <label
                htmlFor="checkbox"
                className="label font-login-sub text-[#9e9e9e]"
              >
                Show Password
              </label>
            </div>
            <button
              type="button"
              onClick={checkLogin}
              className="w-full bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mb-3 font-signup text-xl font-bold"
            >
              Sign In <EastRoundedIcon />
            </button>
            <div className="flex justify-center items-center">
              <div className="h-[1px] bg-white w-28 opacity-25" />
              <p className="label font-login-sub opacity-25 mx-4 text-lg">or</p>
              <div className="h-[1px] bg-white w-28 opacity-25" />
            </div>
            <Link to={"/signup"}>
              <button
                type="button"
                className="w-full bg-accent-navy-200 text-white py-3 rounded border border-[#6B43C7] mt-3"
              >
                Create New Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export { userDetails };
