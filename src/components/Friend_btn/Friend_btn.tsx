import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { friendsList } from "../../pages/Home/Home";
import { userDetails } from "../../pages/Login/Login";
import api from "../../axios";

export default function Friend_btn(props: any) {
  const addFriendToList = () => {
    api
      .put(`friend/${userDetails.user_id}&${props.user_id}`)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-white rounded-lg w-full py-3 px-4 shadow-sm flex justify-between">
      <div className="flex items-center flex-row space-x-3">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center text-center cursor-pointer">
          <img src={props.img} alt="img" className="rounded-full w-10 h-10" />
        </div>
        <div>
          <p className="font-roboto font-bold cursor-pointer">{props.name}</p>
          <p className="font-roboto text-sm text-[#0000006d]">
            {props.user_id}
          </p>
        </div>
      </div>
      <div className="space-x-2">
        {friendsList.includes(props.user_id) ? (
          <Button variant="outlined" startIcon={<ClearIcon />} color="error">
            REMOVE
          </Button>
        ) : (
          <Button
            onClick={addFriendToList}
            variant="outlined"
            startIcon={<AddIcon />}
            color="primary"
          >
            ADD
          </Button>
        )}
      </div>
    </div>
  );
}
