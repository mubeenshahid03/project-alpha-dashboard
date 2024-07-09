import { Drawer } from "antd";
//import Navbar from "./navbar/Navbar";
import Navbutton from "./navbar/Navbutton";
import { CloseOutlined } from "@ant-design/icons";
//import { useState } from "react";
//import Navbutton from "./navbar/Navbutton";
//import Navbar from "./navbar/Navbar";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function CustomDrawer({ isOpen, setIsOpen }: Props) {
  return (
    <div>
      <Drawer
        title={
          <>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-mb_logo_size text-dark_gray  leading-10">
                Logo
              </h1>
              <div
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-12 h-[50px] rounded-[10px] round-[10px] flex items-center justify-center"
              >
                <CloseOutlined style={{ fontSize: "22px", color: "#3C4959" }} />
              </div>
            </div>
          </>
        }
        closable={false}
        placement="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
          <Navbutton ico="bookings" label="bookings" path="/bookings" />
        </div>

        {/* 2nd section of navbar */}
        <div className="flex flex-col w-[90%] items-center justify-center gap-2 absolute bottom-3">
          <Navbutton ico="logout" label="Logout" path="/logout" />
        </div>
      </Drawer>
    </div>
  );
}

export default CustomDrawer;
