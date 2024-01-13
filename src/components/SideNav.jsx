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
      ele: <GoHome className="text-2xl" />,
    },
    {
      path: "/news",
      ele: <FaRegNewspaper className="text-2xl" />,
    },
    {
      path: "/listu",
      ele: <FaRegListAlt className="text-2xl" />,
    },
    {
      path: "/userProfile",
      ele: <AiOutlineUser className="text-2xl" />,
    },
  ];

  return (
    <div className="bg-white sticky bottom-0 rounded-b-3xl px-[24px] py-[24px] w-full flex sm:flex-col justify-between items-center sm:w-[15%] sm:h-full">
      {arr.map((item) => {
        return (
          <NavLink
            to={item.path}
            className={({ isActive, isPending }) =>
              isActive
                ? `${act} w-[45px] h-[45px] cc1 rounded-md`
                : `${disAct} w-[45px] h-[45px] cc1 rounded-md`
            }
          >
            {item.ele}
          </NavLink>
        );
      })}

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
  );
};

export default SideNav;
