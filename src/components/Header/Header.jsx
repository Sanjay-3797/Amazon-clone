import React from "react";
import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";

const showItemList = [
  {
    _id: "100",
    title: "All Departments",
  },
  {
    _id: "101",
    title: "All Departments",
  },
  {
    _id: "102",
    title: "All Departments",
  },
  {
    _id: "103",
    title: "All Departments",
  },
  {
    _id: "104",
    title: "All Departments",
  },
  {
    _id: "105",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
  {
    _id: "106",
    title: "All Departments",
  },
];

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>

        <div className="headerHover">
          <LocationOnOutlinedIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Deliver to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText ">
              Bengaluru
            </span>
          </p>
        </div>
        <div className="h-10 rounded-md flex flex-grow relative">
          <span
            onClick={() => {
              setShowAll((prev) => !prev);
            }}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p2 flex flex-col gap-1 z-50">
                {showItemList.map((item) => (
                  <li key={item._id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchOutlinedIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
