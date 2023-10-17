import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Namad1 from "./../../img/logo.png";
import Namad2 from "./../../img/namad.png";

function Footer() {
  return (
    <footer className="w-full mt-14 py-6">
      <div className="w-full px-[6%]">
        <div className="w-full flex flex-wrap justify-center">
          <FooterLink />
        </div>
        <FooterSocial />
        <FooterNamad />
        <hr className="mt-9" />
        <FooterCopyRight />
      </div>
    </footer>
  );
}

function FooterLink() {
  const [links] = useState([
    {
      LinkName: "فرصت های شغلی",
      To: "/",
    },
    {
      LinkName: "بلاگ",
      To: "/",
    },
    {
      LinkName: "باشگاه رانندگان",
      To: "/",
    },
    {
      LinkName: "ثبت نام راننده اسنپ",
      To: "/",
    },
    {
      LinkName: "پنل سازمانی",
      To: "/",
    },
    {
      LinkName: "درباره ما",
      To: "/About",
    },
    {
      LinkName: "تماس با ما",
      To: "/",
    },
  ]);
  return (
    <div className="w-11/12 xl:w-2/3 text-right">
      <ul className="items-center justify-center w-full text-right flex flex-wrap gap-7 lg:gap-0">
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
                {val.LinkName}
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

function FooterSocial() {
  const [social] = useState([
    {
      Icon: "bi bi-github",
      To: "https://github.com/saman-tofighian",
      Name: "github",
    },
    {
      Icon: "bi bi-linkedin",
      To: "https://www.linkedin.com/in/saman-tofighian/",
      Name: "linkedin",
    },
  ]);
  return (
    <div className="w-full flex flex-wrap justify-center mt-8">
      {social.map((val, index) => {
        return (
          <Link
            to={val.To}
            key={index}
            className="text-[30px] mr-5 duration-700 ease-out hover:text-[#21AA58]"
            title={val.Name}
          >
            <i className={val.Icon}></i>
          </Link>
        );
      })}
    </div>
  );
}

function FooterNamad() {
  const [social] = useState([
    {
      Image: Namad1,
      To: "https://ecunion.ir/verify/snapp.ir?token=37368045acf0232aa0c3",
      Alt: "logo-samandehi",
    },
    {
      Image: Namad2,
      To: "https://logo.samandehi.ir/Verify.aspx?id=37612&p=xlaojyoegvkarfthuiwk",
      Alt: "ecunion",
    },
  ]);
  return (
    <div className="w-full flex flex-wrap justify-center mt-8">
      {social.map((val, index) => {
        return (
          <Link
            to={val.To}
            key={index}
            className="text-[30px] mr-5 duration-700 ease-out hover:text-[#21AA58]"
            target="_blank"
          >
            <img
              src={val.Image}
              alt={val.Alt}
              className="w-[134px] h-[134px]"
            />
          </Link>
        );
      })}
    </div>
  );
}

function FooterCopyRight() {
  return (
    <div className="w-full mt-4 py-4 flex flex-wrap justify-center items-center">
      <hr />
      <h6>
        توسعه یافته توسط{" "}
        <strong className="text-[#21AA58]">
          <em>سامان توفیقیان </em>
        </strong>
        تمامی حقوق محفوظ است
      </h6>
    </div>
  );
}

export default Footer;
