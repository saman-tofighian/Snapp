import React from "react";
import Menu from "./Menu";
import Logo from "./../../img/snappTextLogo.svg";
export default function Header() {
  return (
    <header className="w-full h-[87px] bg-white shadow overflow-hidden fixed top-0 left-0 border border-[#e5e5e5] z-[999999]">
      <nav className="flex items-center justify-between w-full h-full px-[6%]">
        <Menu />
        <HeaderLogo />
      </nav>
    </header>
  );
}

function HeaderLogo() {
  return (
    <figure className="flex items-center justify-center w-1/2 h-full xl:w-1/12">
      <img src={Logo} alt="SnappLogo" />
    </figure>
  );
}
