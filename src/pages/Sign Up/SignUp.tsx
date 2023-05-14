import React from "react";
import "./signUp-styles.css";
import logo from "../../assets/logo/Genix.png";
import {
  TextField,
  InputAdornment,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Link } from "react-router-dom";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import { LocalizationProvider } from "@mui/x-date-pickers";

function SignUp() {
  const [value, setValue] = React.useState("male");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center py-7">
      <div className="w-[50%] flex items-center justify-center flex-col px-28">
        {/*px-12 py-10*/}
        <img src={logo} alt="logo" className="w-[20%] mb-4" />
        <label className="font-signup text-6xl font-extrabold mb-6">
          Sign Up
        </label>
        <form className="w-full flex flex-col space-y-3 text-left">
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
          <div className="flex flex-row space-x-3">
            <div className="space-y-2">
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
            </div>
            <div className="space-y-2">
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
            </div>
          </div>
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
          <div className="flex flex-row space-x-3">
            <div className="w-1/2 flex flex-col space-y-2">
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
            </div>
            <div className="w-1/2 space-y-2">
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
            </div>
          </div>
          <div className="flex flex-row space-x-3">
            <div className="space-y-2">
              <label
                htmlFor="pwd"
                className="label-signup font-login-sub font-extrabold"
              >
                Password
              </label>
              <TextField
                id="pwd"
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
            </div>
            <div className="space-y-2">
              <label
                htmlFor="confirmPwd"
                className="label-signup font-login-sub font-extrabold"
              >
                Confirm Password
              </label>
              <TextField
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
            </div>
          </div>
          <Link to={"/"}>
              <button className="w-full bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mt-5 font-signup text-xl font-bold">
                Sign Up
              </button>
            </Link>
          <p className="text-sm text-center">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
