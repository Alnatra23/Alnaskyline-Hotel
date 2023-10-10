import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { close2, logo, menu2 } from '../../assets';
import { navLinks } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const customerName = sessionStorage.getItem('nama'); // Change this to your authentication system

  function logout() {
    sessionStorage.clear();
    navigate('/login');
  }
  const logoutButtonStyle = {
    backgroundColor: toggle ? 'transparent' : 'black', // Set transparent background in mobile mode
    color: 'white',
    width: '93px',
    height: '52px',
    borderRadius: '10px',
    display: 'block',
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          <img
            src="/images/Alnaskyline.png"
            alt="hoobank"
            className="w-[260px] h-[90px]"
          />
          {customerName && (
            <p className="font-bold text-black mt-1 mr-4">
              Hello, {customerName}
            </p>
          )}
        </div>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[14px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-8'
            } text-gray hidden-print`}
          >
            <Link to={nav.to}>{nav.title}</Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <img
          src={toggle ? close2 : menu2}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 gray-bg absolute top-32 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
                } text-gray hidden-print`}
              >
                <Link to={nav.to}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={logout} className="w-[93px] h-[52px] text-white bg-black rounded-lg hidden-print sm:block">
        Keluar
      </button>
    </nav>
  );
};

export default Navbar;
