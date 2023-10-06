import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { close, close2, logo, menu, menu2 } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  let navigate = useNavigate();
  console.log("hello : ", navLinks);
  function logout() {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img
        src={"/images/Alnaskyline.png"}
        alt="hoobank"
        className="w-[200] h-[90px]"
      />

      {/* Desktop Breakpoints */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[14px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-8"
            } text-gray`}
          >
            <Link to={`${nav.to}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Breakpoints */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <img
          src={toggle ? close2 : menu2}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 gray-bg absolute top-32 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-gray`}
              >
                <Link to={`${nav.to}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={logout}
        className="w-[93px] h-[52px] text-white bg-black rounded-lg sm:block"
      >
        Keluar
      </button>
    </nav>
  );
};

export default Navbar;
