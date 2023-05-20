import { useEffect } from "react";
import accImg from "../../assets/img/acc.jpeg";
import { userDetails } from "../../pages/Login/Login";
import api from "../../axios";

export default function Friend_side() {
  return (
    <div className="w-full py-3 px-3">
      <div className="flex items-center flex-row space-x-3">
        <div className="border w-8 h-8 rounded-full flex items-center justify-center text-center cursor-pointer">
          <img src={accImg} alt="img" className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto cursor-pointer">
            Kavindu Thiwanka
          </p>
        </div>
      </div>
    </div>
  )
}
