import React from "react";
import SideNav from "./SideNav";
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const act = "bg-[#2718ff] text-white";
  const disAct = "bg-white text-gray-400";
  return (
    <div className="hidden h-[100vh] bg-white sm:flex flex-col items-center justify-between py-5 rounded-l-3xl fixed">
      <div className="h-[50%] flex flex-col items-center justify-between">
        <div className="h-[80px] flex flex-col items-center justify-between">
          <div
            className="bg-no-repeat bg-center bg-contain sm:w-[30px] sm:h-[30px]"
            id="logo"
          ></div>
          <NavLink
            to={"/search"}
            className={({ isActive, isPending }) =>
              isActive
                ? `${act} w-[45px] sm:w-[30px] sm:h-[30px] h-[45px] cc1 rounded-md`
                : `${disAct} sm:w-[30px] sm:h-[30px] w-[45px] h-[45px] cc1 rounded-md`
            }
          >
            <FaSearch className="text-lg" />
          </NavLink>
        </div>
        <SideNav />
      </div>
      <div className="h-[90px] flex flex-col items-center justify-between">
        <NavLink
          to={"/noti"}
          className={({ isActive, isPending }) =>
            isActive
              ? `${act} w-[45px] sm:w-[30px] sm:h-[30px] h-[45px] cc1 rounded-md`
              : `${disAct} sm:w-[30px] sm:h-[30px] w-[45px] h-[45px] cc1 rounded-md`
          }
        >
          <IoIosNotificationsOutline className="text-2xl" />
        </NavLink>
        <NavLink
          to={"/chacha"}
          className={({ isActive, isPending }) =>
            isActive
              ? `${act} w-[45px] sm:w-[30px] sm:h-[30px] h-[45px] cc1 rounded-md`
              : `${disAct} sm:w-[30px] sm:h-[30px] w-[45px] h-[45px] cc1 rounded-md`
          }
        >
          <IoLogOutOutline className="text-2xl" />
        </NavLink>
      </div>
    </div>
  );
};

export default Aside;
