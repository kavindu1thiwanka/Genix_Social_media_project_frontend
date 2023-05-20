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
import { useNavigate } from "react-router-dom";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import api from "../../axios";
import {v4 as uuidv4} from 'uuid';

function SignUp() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState("Male");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [bday, setBday] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [confirmPwd, setConfirmPwd] = React.useState("");

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName((event.target as HTMLInputElement).value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail((event.target as HTMLInputElement).value);
  };

  const numberHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber((event.target as HTMLInputElement).value);
  };

  const addressHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress((event.target as HTMLInputElement).value);
  };

  const bdayHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBday((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const pwdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd((event.target as HTMLInputElement).value);
  };

  const confirmPwdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPwd((event.target as HTMLInputElement).value);
  };

  const addUser = () => {
    if (pwd === confirmPwd) {
      const unique_id = uuidv4();
      const small_id = unique_id.slice(0,8)
      let newUser = {
        user_id: `@${small_id}`,
        user_name: name,
        user_password: pwd,
        birthDay: bday,
        address: address,
        email: email,
        contactNumber: number,
        gender: value,
      };
      api
        .post("user", newUser)
        .then((res) => {
          const detail = Object.values(res.data.responseData);
          if (res.data.responseData) {
            let friendList = {
              user_id: detail[0],
              friends_ids: [],
              friendsCount: 0,
            };
            api
              .post("friend", friendList)
              .then((res) => {
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            alert("Check Input Details..!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Confirm Password Not Match..");
    }
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
            onChange={nameHandler}
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
                onChange={emailHandler}
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
                onChange={numberHandler}
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
            onChange={addressHandler}
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
                onChange={bdayHandler}
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
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
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
                className="TextField"
                inputProps={{ style: { color: "#000000" } }}
                type="password"
                variant="outlined"
                placeholder="Enter your password"
                fullWidth={true}
                focused={false}
                onChange={pwdHandler}
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
                onChange={confirmPwdHandler}
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
          <button
            type="button"
            onClick={addUser}
            className="w-full bg-accent-navy-200 text-white py-3 rounded bg-[#6B43C7] mt-5 font-signup text-xl font-bold"
          >
            Sign Up
          </button>
          <p className="text-xs text-center">
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
