import Navbutton from "./Navbutton";

function Navbar() {
  return (
    <>
      <div className="mx-auto h-[100%] border-r border-[#f5f5f5]  relative p-4 ">
        <h1 className="font-semibold text-[30px] text-center text-medium_gray ">
          Logo
        </h1>
        {/* Nav options */}

        {/* 1st section of navbar */}
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <Navbutton ico="bookings" label="bookings" path="/" />
        </div>

        {/* 2nd section of navbar */}
        <div className="flex flex-col w-[90%] items-center justify-center gap-2 absolute bottom-3 border-t border-[#f5f5f5] pt-2 ">
          <Navbutton ico="logout" label="Logout" path="/logout" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
