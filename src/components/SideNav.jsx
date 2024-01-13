import React from "react";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const act = "bg-[#2718ff] text-white";
  const disAct = "bg-white text-gray-400";

  const arr = [
    {
      path: "/",
      ele: <GoHome className="text-2xl sm:text-xl" />,
    },
    {
      path: "/news",
      ele: <FaRegNewspaper className="text-2xl sm:text-xl" />,
    },
    {
      path: "/listu",
      ele: <FaRegListAlt className="text-2xl sm:text-xl" />,
    },
    {
      path: "/userProfile",
      ele: <AiOutlineUser className="text-2xl sm:text-xl" />,
    },
  ];



  return (
    <>
      <div className="bg-white sticky bottom-0 rounded-b-3xl px-[24px] sm:px-[12px] py-[24px] w-full flex sm:flex-col justify-between items-center sm:w-[10%] mx-auto sm:h-[35%]">
        {arr.map((item, j) => {
          return (
            <NavLink
              to={item.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? `${act} w-[45px] sm:w-[25px] sm:h-[25px] h-[45px] cc1 rounded-md`
                  : `${disAct} sm:w-[25px] sm:h-[25px] w-[45px] h-[45px] cc1 rounded-md`
              }
              key={j}
            >
              {item.ele}
            </NavLink>
          );
        })}

        <div className="sm:hidden">
          <NavLink
            to={"/search"}
            className={({ isActive, isPending }) =>
              isActive
                ? `${act} w-[45px] h-[45px] cc1 rounded-md`
                : `${disAct} w-[45px] h-[45px] cc1 rounded-md`
            }
          >
            <FaSearch className="text-xl" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNav;
