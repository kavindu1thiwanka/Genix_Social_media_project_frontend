import React from "react";
import accImg from "../../assets/img/acc.jpeg";
import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function Friend_btn() {
  return (
    <div className="bg-white rounded-lg w-full py-3 px-4 shadow-sm flex justify-between">
      <div className="flex items-center flex-row space-x-3">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center text-center cursor-pointer">
          <img src={accImg} alt="img" className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto font-bold cursor-pointer">
            Kavindu Thiwanka
          </p>
          <p className="font-roboto text-sm text-[#0000006d]">@kavindu</p>
        </div>
      </div>
      <div className="space-x-2">
          <Button variant="outlined" startIcon={<CheckIcon />} color="success">Accept</Button>
          <Button variant="outlined" startIcon={<ClearIcon />} color="error">Decline</Button>
      </div>
    </div>
  );
}
