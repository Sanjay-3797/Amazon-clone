import React, { useEffect, useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SideNav from "./SideNav";
import { motion } from "framer-motion";

const HeaderBottom = () => {
  const ref = useRef();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sideBar]);

  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          className="headerHover flex items-center gap-1"
          onClick={() => setSideBar(true)}>
          {" "}
          <MenuOutlinedIcon /> All
        </li>
        <li className="headerHover">Today's Deals</li>
        <li className="headerHover">Customer Service</li>
        <li className="headerHover">Gift Cards</li>
        <li className="headerHover">Registry</li>
        <li className="headerHover">Sell</li>
      </ul>
      {sideBar && (
        <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-75">
          <div className="w-full h-full relative">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-[350px] h-full bg-white border border-black">
              <div className="w-full bg-amazon_light text-white px-6 py-2 flex items-center gap-4">
                <AccountCircleOutlinedIcon />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNav
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNav
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNav
                title="Program & Features"
                one="Gift Cards"
                two="Amazon live"
                three="International Shopping"
              />
              <SideNav
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              <span
                className="cursor-pointer absolute top-0 left-[350px] w-10 h-10 flex items-center justify-center text-white hover:bg-white hover:text-black"
                onClick={() => setSideBar(false)}>
                <CloseOutlinedIcon />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
