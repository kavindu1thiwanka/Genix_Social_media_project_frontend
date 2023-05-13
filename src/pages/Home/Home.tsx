import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import { IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Post from "../../components/Post";
import "./home.css";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Friend_side from "../../components/Friend_side";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
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
              <div className="flex justify-between p-4">
                <div>
                  <p className="text-[#9d9d9d4b] select-none cursor-text">
                    {"What’s on your mind?"}
                  </p>
                </div>
                <div>
                  <PhotoSizeSelectActualOutlinedIcon className="text-[#9d9d9d4b]" />
                </div>
              </div>
            </div>
            {/* Post */}
            <div className="w-[80%] space-y-4">
              <Post />
              <Post img="../../assets/img/acc.jpeg"/>
              <Post />
              <Post />
            </div>
          </div>
          <div className="w-1/4 bg-white px-6 pt-6 shadow-sm">
            <p className="font-roboto font-extrabold text-[#0000009b] mb-3">
              FRIENDS
            </p>
            <TextField className="mb-3"
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
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
              <Friend_side/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
