import { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./post.css";
import api from "../../axios";
import { Users } from "../../types/Users";
export default function Post(props: any) {
  let likesCount: any;

  const [name, setName] = useState<string>("");
  const [img, setImg] = useState<string>("");

  useEffect(() => {
    // retrieveLikesAndComments();
    getUserDetails();
  }, []);

  const retrieveLikesAndComments = () => {
    api
      .get(`like/${props.post_id}`)
      .then((res) => {
        console.log(res);
        likesCount = 0;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserDetails = () => {
    api
      .get(`user/${props.user_id}`)
      .then((res) => {
        const arr = Object.values(res.data.responseData);
        for (const [key, value] of Object.entries(res.data.responseData)) {
          if (key == "name") {
            setName(value as string);
          } else if (key == "userImg") {
            setImg(value as string);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative bg-white rounded-lg w-full shadow-sm p-5 space-y-2">
      <div className="flex flex-row items-center relative">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center text-center mr-3 cursor-pointer">
          <img src={img} className="rounded-full w-9 h-9" />
        </div>
        <div>
          <p className="font-roboto font-bold text-sm cursor-pointer text-black">
            {name}
          </p>
          <p className="font-roboto text-xs text-[#0000006d]">
            {props.date_time}
          </p>
        </div>
        <div className="absolute right-0 cursor-pointer">
          <MoreHorizIcon />
        </div>
      </div>
      {/* Description */}
      <div className="text-sm">
        <p className="mb-5">{props.description}</p>
      </div>
      {/* Image */}
      <div className="w-full h-full">
      {props.img == "" || props.img == null ? "" :<img src={props.img} alt="" className="w-full h-full" />}
      </div>
      {/* Like & Comment */}
      <div className="flex items-center justify-end pt-2 space-x-2">
        <div className="flex flex-row space-x-1">
          <FavoriteIcon className="post_icons cursor-pointer" />
          <p className="text-xs">0 Likes</p>
        </div>
        <div className="flex flex-row space-x-1">
          <ChatBubbleIcon className="post_icons cursor-pointer" />
          <p className="text-xs">0 Comments</p>
        </div>
      </div>
    </div>
  );
}
