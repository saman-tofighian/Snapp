import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import P1 from "../../img/bazaar.png";
import P2 from "../../img/direct-download-badge.png";
import P3 from "../../img/myketmarket.png";
import P4 from "../../img/snapp-pwa.png";
import P5 from "../../img/app_store.svg";

function Downloads() {
  return (
    <section className="w-full my-[5rem]">
      <div className="w-full px-[6%] py-2">
        <LogoLinks />
      </div>
    </section>
  );
}

function LogoLinks() {
  const [pic, setpic] = useState([
    {
      Img: P1,
      To: "https://cafebazaar.ir/app/cab.snapp.passenger?referrer=appmetrica_tracking_id%3D243413381082522868&ym_tracking_id=2955507302754132907",
    },
    {
      Img: P2,
      To: "https://redirect.appmetrica.yandex.com/serve/100056237185439217",
    },
    {
      Img: P3,
      To: "https://myket.ir/app/cab.snapp.passenger?utm_source=search-ads-gift&utm_medium=cpc&referrer=appmetrica_tracking_id%3D1181173947656399155%26ym_tracking_id%3D14072586570120888008",
    },
    {
      Img: P4,
      To: "https://app.snapp.taxi/pre-ride?utm_source=website&utm_medium=webapp-button",
    },
    {
      Img: P5,
      To: "https://apps.apple.com/us/app/%D8%A7%D8%B3%D9%86%D9%BE-snapp/id996370173?referrer=appmetrica_tracking_id%3D1109100489301122257%26ym_tracking_id%3D6803453643356686185",
    },
  ]);
  return (
    <nav className="w-full">
      <ul className="flex flex-wrap items-center justify-between w-full xl:justify-evenly gap-y-9 gap-x-7 lg:gap-x-0 xl:gap-y-0">
        {pic.map((val, index) => {
          return (
            <li className="flex items-center justify-center grow xl:grow-0">
              <Link to={val.To} target="_blank">
                <img
                  src={val.Img}
                  className="w-[160px] h-[47px]"
                  loading="eager"
                  alt=""
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </nav>
  );
}
export default Downloads;
