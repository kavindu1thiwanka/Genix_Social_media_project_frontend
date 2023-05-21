import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import { IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Post from "../../components/Post";
import "./home.css";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Friend_side from "../../components/Friend_side";
import { useEffect, useState } from "react";
import { PostDetails } from "../../types/PostDetails";
import api from "../../axios";
import PopUpPost from "../../components/Add_Post";
import { userDetails } from "../Login/Login";
import PeopleIcon from '@mui/icons-material/People';
import { FriendList } from "../../types/FriendList";

let friendsList: FriendList[] = [];

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  const handleAddPostPopUp = (event: any) => {
    setIsShown((current) => !current);
  };

  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [friendList, setFriendList] = useState<FriendList[]>([]);

  useEffect(() => {
    retrieveAllPosts();
    retrieveAllFriends();
  }, []);

  const retrieveAllFriends = () => {
    api
      .get(`friend/${userDetails.user_id}`)
      .then((res) => {
        setFriendList(res.data.responseData);
        friendsList = res.data.responseData;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const retrieveAllPosts = () => {
    api
      .get("post")
      .then((res) => {
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const shufflePostList = (array: PostDetails[]) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div className="w-full min-h-screen bg-[#e6e6e6a4] overflow-hidden">
      <Header />
      <div className="w-full h-screen flex flex-row">
        <Menu />
        <div className="w-4/5 pt-14 flex flex-row">
          <div className="scrollSection w-3/4 px-5 py-2 pt-6 pb-6 space-y-4 items-center flex flex-col overflow-scroll">
            <div className="bg-white rounded-lg w-[80%] h-24 shadow-sm">
              <p className="font-roboto font-semibold pt-2 pl-4 pb-1">
                Post Something
              </p>
              <div className="bg-[#00000026] w-full h-[1px]"></div>
              <div
                onClick={handleAddPostPopUp}
                className="flex justify-between p-4 cursor-text"
              >
                <div>
                  <p className="text-[#9d9d9d4b] select-none cursor-text">
                    {"What’s on your mind?"}
                  </p>
                </div>
                <div>
                  <PhotoSizeSelectActualOutlinedIcon className="text-[#9d9d9d4b] cursor-pointer" />
                </div>
              </div>
            </div>
            {isShown && (
              <div className="w-[80%] space-y-4">
                <PopUpPost />
              </div>
            )}
            {/* Post */}
            <div className="scrollSection w-[80%] space-y-4">
             {shufflePostList(postList).map((post) => (
                <Post
                  key={post.post_id}
                  post_id={post.post_id}
                  user_id={post.user_id}
                  date_time={post.date_time}
                  description={post.description}
                  img={post.img}
                />
              ))}
            </div>
          </div>
          <div className="w-1/4 bg-white px-6 pt-6 shadow-sm">
            <p className="font-roboto font-extrabold text-[#0000009b] mb-3 select-none">
              FRIENDS
            </p>
            <TextField
              className="mb-3"
              fullWidth
              id="standard-bare"
              variant="outlined"
              placeholder="Search"
              focused={false}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
            <div className="scroll h-screen space-y-1 items-center flex flex-col overflow-scroll mt-3">
              {
                friendList.length === 0 ?  (<div className="select-none flex flex-col justify-center items-center text-[#9d9d9d6a] mt-16"><PeopleIcon/><p className="">Add Friends to Show Here</p></div> ):(
                  
                  friendList.map((friend) => (
                    friend !== userDetails.user_id && (
                      <Friend_side key={friend} user_id={friend} />
                    )
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { friendsList };