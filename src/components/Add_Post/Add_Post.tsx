import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { TextField } from "@mui/material";
import "./Add_Post.css";
import PublicIcon from "@mui/icons-material/Public";
import { userDetails } from "../../pages/Login/Login";
import api from "../../axios";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Add_Post(props: any) {
  const [description, setDescription] = useState("");
  const descriptionInputHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription((event.target as HTMLInputElement).value);
  };

  const [image, setImage] = useState("");

  const convertToBase64 = (e: any) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.onerror = (error) => {
      console.log("Error : ", error);
    };
  };

  const createPost = () => {
    const unique_id = uuidv4();
    const small_id = unique_id.slice(0, 8);

    let newPost = {
      post_id: `P${small_id}`,
      user_id: `${userDetails.user_id}`,
      date_time: `${new Date().toLocaleString() + ""}`,
      description: description,
      img: image,
    };
    console.log(newPost)
    api
      .post("post", newPost)
      .then((res) => {
        alert("Post Added..!");
      })
      .catch((error) => {
        console.log(error);
        alert("Use")
      });
  };

  return (
    <div className="relative bg-white rounded-lg w-full shadow-sm p-5 space-y-2">
      <div className="flex flex-row items-center relative">
        <div className="border w-9 h-9 rounded-full flex items-center justify-center text-center mr-3 cursor-pointer">
          <img src={userDetails.userImg} alt="." className="rounded-full" />
        </div>
        <div>
          <p className="font-roboto font-bold text-sm cursor-pointer">
            {userDetails.name}
          </p>
          <p className="font-roboto text-xs text-[#0000006d]">
            {/* {new Date().toLocaleString() + ""} */}
            <PublicIcon fontSize="small" className="p-1" />
            Public
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
          onChange={descriptionInputHandler}
          InputProps={{
            disableUnderline: true,
          }}
          maxRows={4}
          multiline
          required
        />
      </div>
      {/* Image */}
      <div className="w-full h-72 flex justify-center items-center border rounded-md p-2 space-y-2 flex-col">
        <div className="border w-full h-[90%] rounded-md flex justify-center items-center">
          {image == "" || image == null ? <ControlPointIcon fontSize="large" className="text-[#9898986a]"/> :<img src={image} className="h-full" />}
        </div>
        <div className="w-full h-[10] ">
          <input onChange={convertToBase64} type="file"></input>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button type="button"
          onClick={createPost}
          className="w-[15%] text-white py-2 rounded hover:bg-[#7048ce] bg-[#6B43C7] font-signup text-base font-bold mt-3"
        >
          Post
        </button>
      </div>
    </div>
  );
}
