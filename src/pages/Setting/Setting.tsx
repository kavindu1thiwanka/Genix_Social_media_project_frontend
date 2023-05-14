import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import {
  TextField,
  InputAdornment,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

export default function Setting() {
  const [value, setValue] = React.useState("male");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
        <Header />
        <div className="w-full flex flex-row">
          <Menu />
          {/* Content Display Div */}
          <div className="w-5/6 pt-20 px-5 py-6 flex justify-center h-screen">
            <div className="scroll bg-white rounded-lg w-full shadow-sm overflow-scroll px-5">
              <div className="bg-white w-full sticky top-0 z-20 py-5">
                <label className="font-roboto font-extrabold text-2xl">
                  SETTING
                </label>
              </div>
              <form className="w-[45%] flex flex-col space-y-3 text-left mt-3">
                <label
                  htmlFor="name"
                  className="label-signup font-login-sub font-extrabold "
                >
                  Full Name
                </label>
                <TextField
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="text"
                  variant="outlined"
                  placeholder="Enter your email"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person2RoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor="email"
                  className="label-signup font-login-sub font-extrabold"
                >
                  Email Address
                </label>
                <TextField
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="email"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmailRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor="address"
                  className="label-signup font-login-sub font-extrabold"
                >
                  Address
                </label>
                <TextField
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="text"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HomeRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor="contactNum"
                  className="label-signup font-login-sub font-extrabold"
                >
                  Contact Number
                </label>
                <TextField
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="tel"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor=""
                  className="label-signup font-login-sub font-extrabold"
                >
                  Date of Birth
                </label>
                <TextField
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="date"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  required
                />
                <FormControl>
                  <label
                    id="gender-radio-buttons-group"
                    className="label-signup font-login-sub font-extrabold"
                  >
                    Gender
                  </label>
                  <RadioGroup
                    row
                    aria-labelledby="gender-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
                <button className="w-[32%] bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mt-7 font-signup text-base font-bold">
                  Save Changes
                </button>
                <label className="font-roboto font-extrabold text-2xl pt-7 pb-2">
                  Change Password
                </label>
                <label
                  htmlFor="pwdOld"
                  className="label-signup font-login-sub font-extrabold mt-3"
                >
                  Current Password
                </label>
                <TextField
                  id="pwdOld"
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="password"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor="pwdNew"
                  className="label-signup font-login-sub font-extrabold"
                >
                  New Password
                </label>
                <TextField
                  id="pwdNew"
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="password"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <label
                  htmlFor="confirmPwdNew"
                  className="label-signup font-login-sub font-extrabold"
                >
                  Confirm New Password
                </label>
                <TextField
                  id="confirmPwdNew"
                  className="TextField"
                  inputProps={{ style: { color: "#000000" } }}
                  type="password"
                  variant="outlined"
                  placeholder="Enter your password"
                  fullWidth={true}
                  focused={false}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                />
                <button className="w-[32%] bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mt-5 font-signup text-base font-bold">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
