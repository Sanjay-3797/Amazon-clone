import React from "react";
import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { showItemList } from "../../constants/constant";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import sglogo from "../../assets/sgbites/sglogo1.png";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="bg-black text-white">
      <ul className="flex justify-around items-center">
        <li>
          <div className="w-20 cursor-pointer  m-3">
            <img src={sglogo} alt="logo" />
          </div>
        </li>
        <li className="headerHover">Home</li>
        <li className="headerHover">
          Breakfast <ArrowDropDownOutlinedIcon />
        </li>
        <li className="headerHover">
          Lunch
          <ArrowDropDownOutlinedIcon />
        </li>
        <li className="headerHover">
          Dinner
          <ArrowDropDownOutlinedIcon />
        </li>
        <li className="headerHover">Healthy</li>
        <li className="headerHover">
          Snacks
          <ArrowDropDownOutlinedIcon />
        </li>
        <li className="headerHover">
          Sweets
          <ArrowDropDownOutlinedIcon />
        </li>
        <li className="headerHover hover:border">Buy Premium 👑</li>
      </ul>
    </div>
  );
};

export default Header;
