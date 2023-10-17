import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Menu() {
  const [links, setlinks] = useState([
    {
      Link: "فرصت های شغلی",
      To: "/",
    },
    {
      Link: "بلاگ",
      To: "/",
    },
    {
      Link: "باشگاه رانندگان",
      To: "/",
    },
    {
      Link: "ثبت نام راننده اسنپ",
      To: "/",
    },
    {
      Link: "پنل سازمانی",
      To: "/",
    },
    {
      Link: "درباره ما",
      To: "/About",
    },
    {
      Link: "تماس با ما",
      To: "/",
    },
  ]);

  const OpenList = () => {
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("overlay").classList.add("block");
    setTimeout(() => {
      document.getElementById("mobileList").classList.remove("w-[0]");
      document.getElementById("mobileList").classList.add("w-[220px]");
    }, 700);
  };

  const CloseList = () => {
    document.getElementById("mobileList").classList.remove("w-[220px]");
    document.getElementById("mobileList").classList.add("w-[0]");
    setTimeout(() => {
      document.getElementById("overlay").classList.remove("block");
      document.getElementById("overlay").classList.add("hidden");
    }, 1000);
  };

  return (
    <section className="w-1/6 xl:w-[62%] h-full text-right">
      <ul className="items-center justify-center hidden w-full h-full text-right xl:flex">
        {links.map((val, index) => {
          return (
            <li
              key={index}
              className="flex items-center justify-center text-right grow"
            >
              <Link
                className="text-[#1e1e1e] w-fit duration-700 ease-out hover:text-[#21AA58]"
                to={val.To}
              >
                {val.Link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center w-full h-full">
        <span
          className="text-[2.2rem] cursor-pointer flex mt-2"
          onClick={OpenList}
        >
          <i class="bi bi-list"></i>
        </span>
      </div>
      <div
        className="hidden fixed top-0 left-0 z-[99] bg-[#000000ae] w-full h-[100vh] xl:hidden duration-1000 ease-out"
        id="overlay"
      >
        <div
          id="mobileList"
          className="h-[100vh] w-[0] bg-white fixed top-0 right-0 overflow-hidden xl:hidden duration-1000 ease-out"
        >
          <div className="w-full">
            <span
              className="text-red-600 cursor-pointer text-[2.3rem] py-4 pr-6 flex"
              onClick={CloseList}
            >
              <i class="bi bi-x-lg"></i>
            </span>
          </div>
          <ul className="w-full h-[88vh] mt-[.4rem] flex flex-wrap justify-center">
            {links.map((val, index) => {
              return (
                <li className="flex items-center justify-center w-full">
                  <Link
                    className="text-slate-700 w-fit h-fit duration-700 ease-out hover:text-[#21AA58]"
                    to={val.To}
                  >
                    {val.Link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet />
    </section>
  );
}
