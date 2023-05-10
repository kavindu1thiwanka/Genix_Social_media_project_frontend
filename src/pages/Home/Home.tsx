import Header from "../../components/Header";
import Menu from "../../components/SideMenu";
import { IconButton, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

function Home() {
  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] overflow-hidden">
      <Header />
      <div className="w-full flex flex-row">
        <Menu />
        <div className="w-4/5 pt-14 flex flex-row">
          <div className="w-3/4 px-5 py-2 pt-6">
            <div className="bg-white rounded-lg w-full h-20 shadow-sm">
              <p className="font-roboto font-semibold pt-2 pl-4 pb-1">
                Post Something
              </p>
              <div className="bg-[#00000026] w-full h-[1px]"></div>
              <div></div>
            </div>
          </div>
          <div className="w-1/4 bg-white px-6 pt-6 shadow-sm">
            <p className="font-roboto font-extrabold text-[#0000009b] mb-3">
              FRIENDS
            </p>
            <TextField
              fullWidth
              id="standard-bare"
              variant="outlined"
              defaultValue="Search"
              focused={false}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchOutlined />
                  </IconButton>
                ),
              }}
            />
            <div>{/* firends load here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
