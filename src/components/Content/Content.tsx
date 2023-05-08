import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import SignUp from "../../pages/Sign Up";
import Home from "../../pages/Home";
import Events from "../../pages/Events";
import Friends from "../../pages/Friends";
import Profile from "../../pages/Profile";
import Setting from "../../pages/Setting";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
        </Routes>
      </div>
    );
  }
}
