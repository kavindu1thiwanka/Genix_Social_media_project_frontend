import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { TextField } from "@mui/material";
import './Add_Post.css';
import PublicIcon from '@mui/icons-material/Public';
import { userDetails } from "../../pages/Login/Login";

export default function Add_Post(props: any) {
  return (
    <div className="relative bg-white rounded-lg w-full shadow-sm p-5 space-y-2">
      <div className="flex flex-row items-center relative">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center text-center mr-3 cursor-pointer">
          <img src={props.userDp} alt="." className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto font-bold text-sm cursor-pointer">
            {userDetails.name}
          </p>
          <p className="font-roboto text-xs text-[#0000006d]">
            {/* {new Date().toLocaleString() + ""} */}
            <PublicIcon fontSize="small" className="p-1"/>Public
          </p>
        </div>
        <div className="absolute right-0 cursor-pointer">
          <span className="close text-2xl">&times;</span>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 px-2 pb-3">
        <TextField
          className="text-sm"
          inputProps={{ style: { color: "#000" } }}
          type="text"
          variant="standard"
          placeholder="What’s on your mind?"
          fullWidth={true}
          focused={false}
          InputProps={{
            disableUnderline: true,
          }}
          maxRows={4}
          multiline
          required
        />
      </div>
      {/* Image */}
      <div className="w-full h-72 flex justify-center items-center border rounded-md px-2">
        <ControlPointIcon
          fontSize="large"
          className="cursor-pointer text-[#bababa]"
        />
      </div>
      <div className="flex items-center justify-end">
        <button className="w-[15%] text-white py-2 rounded hover:bg-[#7048ce] bg-[#6B43C7] font-signup text-base font-bold mt-3">
          Post
        </button>
      </div>
    </div>
  );
}
