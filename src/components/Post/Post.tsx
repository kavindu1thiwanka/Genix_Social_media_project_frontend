import React from "react";
import accImg from "../../assets/img/acc.jpeg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import "./post.css";

export default function Post(props: any) {
  // const postImg : string= props.img;
  // console.log(postImg);
  return (
    <div className="relative bg-white rounded-lg w-full shadow-sm p-5 space-y-2">
      <div className="flex flex-row items-center relative">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center text-center mr-3 cursor-pointer">
          <img src={accImg} alt="img" className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto font-bold text-sm cursor-pointer">
            Kavindu Thiwanka
          </p>
          <p className="font-roboto text-xs text-[#0000006d]">
            01 May at 08.23 PM
          </p>
        </div>
        <div className="absolute right-0 cursor-pointer">
          <MoreHorizIcon />
        </div>
      </div>
      {/* Description */}
      <div className="text-sm">
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at
          debitis sequi, voluptates veniam nam labore. Ex a praesentium
          laboriosam dolor labore adipisci, commodi unde pariatur! Quod tenetur
          itaque laudantium!
        </p>
      </div>
      {/* Image */}
      <div>
        {/* <img src={postImg} alt="" className="w-full h-full"/> */}
      </div>
      {/* Like & Comment */}
      <div className="absolute flex flex-row bottom-0 right-0 p-4 space-x-2">
        <div className="flex flex-row space-x-1">
          <FavoriteIcon className="post_icons cursor-pointer" />
          <p className="text-xs">10 Likes</p>
        </div>
        <div className="flex flex-row space-x-1">
          <ChatBubbleIcon className="post_icons cursor-pointer" />
          <p className="text-xs">2 Comments</p>
        </div>
      </div>
    </div>
  );
}
