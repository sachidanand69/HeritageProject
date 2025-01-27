"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, {useContext, useEffect, useState } from "react";
import HeritageLogo from "../HeritageLogo/HeritageLogo";
import { StoreContext } from "@/Context/context";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { useAppContext} from "@/Context/context";



const Header:React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Default option
  const router=useRouter();

  


  const options1 = [{ title: "Member", path: "/auth/signin", submenu: { memberID: "User ID", password: "Password1", paths: "/auth/member" } },
                   { title: "Agent", path: "/auth/signin",submenu: { memberID: "User ID", password: "Password2", paths: "/auth/agent" }  },
                   { title: "Corporate", path: "/auth/signin",submenu: { memberID: "User ID", password: "Password3", paths: "/auth/corporate"} }];

  

  const handleNavigation = (item:{title:string, path:string, submenu: any}) => {
    const queryString = new URLSearchParams(item.submenu).toString();
    console.log(item.submenu.paths);
    router.push(`${item.path}?${queryString}`);
    // router.replace(item.path);
  };

  const toggleDropdown = () => {
    setDropdownToggler((prev) => !prev);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setDropdownToggler(false); // Close the dropdown after selection
  };

  const handleMouseEnter = () => {
    setDropdownToggler(true);
  };

  const handleMouseLeave = () => {
    setDropdownToggler(false);
  };


  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
        ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/" className="w-40">
            <HeritageLogo></HeritageLogo>
            {/* <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  style={{width: '85%'}}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  style={{width: '85%'}}
                  className="hidden w-full dark:block"
                /> */}
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-300" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "delay-400 !w-full" : "w-0"
                    }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!w-full delay-500" : "w-0"
                    }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-[0]" : "h-full"
                    }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? "!h-0 delay-200" : "h-0.5"
                    }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                      >
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-primary">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-primary hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0" >
            <nav className="group relative">
              <>
                <button
                  onClick={() => setDropdownToggler(!dropdownToggler)}
                  className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                >
                  Login As
                  <span>
                    <svg
                      className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </span>
                </button>

                <ul
                  className={`dropdown ${dropdownToggler ? "flex" : ""}`}
                >
                  {options1.map((item, key) => (
                    <li key={key} className="hover:text-primary">
                      <a href="#" onClick={(e)=>{e.preventDefault(); handleNavigation(item)}}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </>
            </nav>

            {/* <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-36"> */}
            {/* <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
                {options.map((item, key) => (
                  <li key={key} className="group">
                    <Link
                      href={"#"}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              </nav> */}
            {/* </div> */}
            <div>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
