import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";
import SignUp from "../../pages/Sign Up";

export default class Content extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    );
  }
}
