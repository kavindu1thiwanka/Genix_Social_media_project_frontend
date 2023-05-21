import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import "./friends.css";
import Friend_btn from "../../components/Friend_btn";
import { useEffect, useState } from "react";
import api from "../../axios";
import { userDetails } from "../Login/Login";
import { Users } from "../../types/Users";

export default function Friends() {
  const [friendList, setFriendList] = useState<Users[]>([]);

  useEffect(() => {
    retrieveAllFriends();
  }, []);

  const retrieveAllFriends = () => {
    api
      .get(`user`)
      .then((res) => {
        setFriendList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full min-h-screen bg-[#e6e6e6a4] overflow-hidden">
      <Header />
      <div className="w-full flex flex-row">
        <Menu />
        {/* Content Display Div */}
        <div className="scroll w-5/6 pt-20 px-5 py-2 pb-6 flex flex-col text-left space-y-3 h-screen">
          <h1 className="font-roboto font-extrabold text-2xl">FRIENDS</h1>
          <div className="scroll overflow-scroll space-y-3">
            {friendList.map((user) => (
                user.user_id !== userDetails.user_id && (
                  <Friend_btn key={user.user_id} name={user.user_name} user_id={user.user_id} img={user.userImg}/>
              )))}
          </div>
        </div>
      </div>
    </div>
  );
}
