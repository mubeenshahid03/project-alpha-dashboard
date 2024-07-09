import Contents from "../routes/Contents";
import Navbar from "../components/navbar/Navbar";
import CustomDrawer from "../components/CustomDrawer";
import { useState } from "react";
import searchIcon from "../assets//topnav/Search.png";
import userIcon from "../assets/topnav/user.svg";
import { MenuOutlined } from "@ant-design/icons";
import CustomPopOver from "../components/popover/CustomPopOver";
import useSearchStore from "../store/Search/search";
const Home = () => {
  const { setSearchQuery, searchQuery } = useSearchStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="App relative h-[100vh] ">
        {/* top */}
        <div className="h-[56px] w-[100%] lg:w-[80%] fixed top-0 right-0 flex items-center justify-between px-[10px] md:px-[35px] md:py-[20px] border-b border-[#f5f5f5]">
          <div className="block lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <MenuOutlined style={{ fontSize: "22px", color: "#3C4959" }} />
            </button>
          </div>
          <div className="relative flex items-center">
            <img
              className="absolute right-[20px] h-[20px] w-[20px] left-2"
              src={searchIcon}
              alt=""
            />
            <input
              className="border-2 rounded-lg focus:border-none  h-[35px] w-[150px] sm:w-[200px] md:w-[341px] pl-8 pr-2 md:pl-10 md:pr-10 font-normal text-base leading-6 focus:outline-none focus:ring-2 focus:ring-green_600"
              placeholder="Search"
              type="search"
              name=""
              id=""
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className=" space-x-4 md:space-x-8 flex items-center justify-around ">
            <CustomPopOver />
            <img
              src={userIcon}
              alt="bell-img-top-nav"
              className="h-[20px] w-[20px]"
            />
            {/* <img
              src={bellIcon}
              alt="bell-img-top-nav"
              className="h-[25px] w-[25px]"
            /> */}
          </div>
        </div>
        {/* left */}
        <div className="hidden lg:block h-[100vh] w-[20%] fixed top-0 left-0 box-border">
          <Navbar />
        </div>
        {/* Content */}
        <div className="absolute top-[56px] right-0 w-[100%] lg:w-[80%] overflow-auto h-[calc(100vh-56px)]">
          <Contents />
        </div>
        <CustomDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Home;
