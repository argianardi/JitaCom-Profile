import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

import { IoSunny, IoMoon } from "react-icons/io5";
// import { ThemeContext } from "../utils/DarkmodeContext";

export default function Navbar() {
  //   const { theme, setTheme } = useContext(ThemeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgNav, setBgNav] = useState(" ");
  //   const handleChangeTheme = (mode) => {
  //     setTheme(mode);
  //   };

  const changBackground = () => {
    if (window.scrollY == 0) {
      setBgNav(" ");
    } else {
      setBgNav("bg-biruJita bg-opacity-70 bgNav");
    }
  };

  window.addEventListener("scroll", changBackground);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-full px-1 sm:px-10 text-orangeJita ${bgNav}`}
    >
      <nav className="flex flex-wrap items-center justify-between mb-3">
        <div className="flex flex-wrap items-center w-full px-2 mx-auto md:px-4">
          <div className="flex items-center justify-between w-full ">
            {/*  logo*/}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="w-[50px] mt-5" />
              <h1 className="mx-3 text-xl font-bold sm:text-2xl font-poppins text-main">
                Jita Computer
              </h1>
            </Link>

            <button
              className="block py-1 text-xl leading-none text-black border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="w-[30px] h-[3px] mb-1 block bg-orangeJita"></span>
              <span className="w-[30px] h-[3px] mb-1 block bg-orangeJita"></span>
              <span className="w-[30px] h-[3px]  block bg-orangeJita"></span>
            </button>

            {/* List menu for large size */}
            <ul className="flex-col items-center justify-between hidden list-none lg:flex lg:flex-row lg:ml-auto">
              {/* CCTV */}
              <li className="mx-3 nav-item hover:underline">
                <Link to="/cart" className="flex items-center ">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita">
                    CCTV
                  </h3>
                </Link>
              </li>

              {/* Laptop */}
              <li className="mx-3 nav-item hover:underline">
                <Link to="/history-order" className="flex items-center">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita">
                    Laptop
                  </h3>
                </Link>
              </li>

              {/* Printer */}
              <li className="mx-3 nav-item hover:underline">
                <Link to="/profile" className="flex items-center">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita">
                    Printer
                  </h3>
                </Link>
              </li>

              {/* dark mode */}
              <li className="mx-3 cursor-pointer nav-item hover:underline">
                {/* {theme === "dark" ? ( */}
                <div
                  className="flex items-center"
                  // onClick={() => handleChangeTheme("light")}
                >
                  <IoSunny className="text-orangeJita " size={35} />
                  <p className="text-xl font-bold ">Dark</p>
                </div>

                {/* ) : ( */}
                {/* <IoMoon
                    className="text-white"
                    size={35}
                    onClick={() => handleChangeTheme("dark")}
                  />
                )} */}
              </li>
            </ul>
          </div>

          {/* menu for mobile and tablet */}
          <div
            className={
              "lg:hidden flex-grow items-center" +
              (navbarOpen ? " absolute top-14 right-3 z-50 " : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex justify-self-end flex-col  w-[200px] list-none bg-putihJita rounded-md p-2 lg:flex-row lg:ml-auto ">
              {/* CCTV */}
              <li className="w-[200px] nav-item hover:underline">
                <Link to="/computer" className="flex items-center ">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita ">
                    CCTV
                  </h3>
                </Link>
              </li>

              {/* Laptop */}
              <li className="nav-item w-[200px] mt-1 hover:underline">
                <Link to="/history-order" className="flex items-center">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita">
                    Laptop
                  </h3>
                </Link>
              </li>

              {/* Printer */}
              <li className="nav-item w-[200px] mt-1 hover:underline">
                <Link to="/profile" className="flex items-center">
                  <h3 className="ml-3 text-xl font-bold font-poppins text-orangeJita ">
                    Printer
                  </h3>
                </Link>
              </li>

              {/* dark mode */}
              <li className="mt-1 cursor-pointer nav-item hover:underline">
                {/* {theme === "dark" ? ( */}
                <div
                  className="flex items-center"
                  // onClick={() => handleChangeTheme("light")}
                >
                  <IoSunny className="text-orangeJita " size={35} />
                  <p className="ml-1 text-xl font-bold">Dark</p>
                </div>

                {/* ) : ( */}
                {/* <IoMoon
                    className="text-white"
                    size={35}
                    onClick={() => handleChangeTheme("dark")}
                  />
                )} */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
