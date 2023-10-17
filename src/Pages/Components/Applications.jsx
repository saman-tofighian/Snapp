import React, { Component, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import AppImage1 from "../../img/pickup.svg";
import AppImage2 from "../../img/bike.svg";
import AppImage3 from "../../img/taxi.svg";
import AppImage4 from "../../img/food.svg";
import AppImage5 from "../../img/spdiscount.png";
import AppImage6 from "../../img/fdom-t.png";
import AppImage7 from "../../img/intflight.svg";
import AppImage8 from "../../img/insdiscount.png";
import AppImage9 from "../../img/hotel.svg";
import AppImage10 from "../../img/hotel.svg";
import AppImage11 from "../../img/doctor.svg";
import AppImage12 from "../../img/bus.svg";
import AppImage13 from "../../img/train.svg";
import AppImage14 from "../../img/pharmacy.svg";
import AppImage15 from "../../img/moving.svg";
import AppImage16 from "../../img/driver.svg";
import AppImage17 from "../../img/shop.svg";
import AppImage18 from "../../img/investment.svg";
import AppImage19 from "../../img/Credit.svg";
import AppImage20 from "../../img/club.svg";

function Applications() {
  return (
    <section className="w-[100%] bg-[#F2F5F8] py-[40px]">
      <div className="w-full px-[6%]">
        <ApplicationTitle />
        <Application />
      </div>
    </section>
  );
}

class ApplicationTitle extends Component {
  constructor() {
    super();
    this.state = {
      Text: "یک اپلیکیشن، برای تمام نیازها",
    };
  }
  render() {
    return (
      <section className="flex justify-center w-full py-[10px]">
        <h2 className="text-[23px] md:text-[29px] lg:text-[33px] xl:text-[36px] font-semibold text-slate-700">
          {this.state.Text}
        </h2>
      </section>
    );
  }
}

function Application() {
  const [data, setdata] = useState([
    {
      Image: AppImage1,
      Title: "درخواست وانت",
      Desc: "حمل و نقل با اسنپ",
    },
    {
      Image: AppImage2,
      Title: "پیک موتوری",
      Desc: "حمل و نقل با اسنپ",
    },
    {
      Image: AppImage3,
      Title: "تاکسی اینترنتی",
      Desc: "امکان درخواست آنلاین خودرو با اسنپ",
    },
    {
      Image: AppImage4,
      Title: "سفارش آنلاین غذا",
      Desc: "سفارش غذا، نان و شیرینی با اسنپ",
    },
    {
      Image: AppImage5,
      Title: "سوپرمارکت آنلاین",
      Desc: "تهیه اقلام روزانه با اسنپ",
    },
    {
      Image: AppImage5,
      Title: "اسنپ اکسپرس",
      Desc: "تحویل کمتر از ۳۰ دقیقه",
    },
    {
      Image: AppImage6,
      Title: "بلیط پرواز داخلی",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage7,
      Title: "بلیط پرواز داخلی",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage8,
      Title: "بیمه",
      Desc: "خرید آنلاین بیمه با اسنپ",
    },
    {
      Image: AppImage9,
      Title: "رزرو هتل",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage10,
      Title: "رزرو اقامتگاه",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage11,
      Title: "پزشک و مشاور",
      Desc: "درمان با اسنپ",
    },
    {
      Image: AppImage12,
      Title: "بلیط اتوبوس",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage13,
      Title: "بلیط قطار",
      Desc: "گردشگری با اسنپ",
    },
    {
      Image: AppImage14,
      Title: "داروخانه",
      Desc: "داروخانه آنلاین اسنپ",
    },
    {
      Image: AppImage15,
      Title: "اسباب‌کشی منزل",
      Desc: "حمل و نقل با اسنپ",
    },
    {
      Image: AppImage16,
      Title: "ثبت نام راننده",
      Desc: "ثبت نام تاکسی اینترنتی اسنپ",
    },
    {
      Image: AppImage17,
      Title: "فروشگاه",
      Desc: "خرید از فروشگاه های معتبر شهر",
    },
    {
      Image: AppImage18,
      Title: "سرمایه‌گذاری",
      Desc: "خدمات غیر حضوری بورس و سرمایه‌گذاری",
    },
    {
      Image: AppImage19,
      Title: "سرویس اعتباری",
      Desc: "پرداخت با اسنپ",
    },
    {
      Image: AppImage20,
      Title: "اسنپ! ‌کلاب",
      Desc: "باشگاه مشتریان اسنپ!",
    },
  ]);
  return (
    <section className="flex flex-wrap justify-center w-full mt-7">
      {data.map((val, index) => {
        return <ApplicationItems key={index} {...val} />;
      })}
    </section>
  );
}

function ApplicationItems({ Image, Title, Desc }) {
  return (
    <div className="w-11/12 md:w-6/12 xl:w-[29%] p-4 flex justify-between items-center">
      <ul className="w-full">
        <li className="w-full">
          <Link
            to="/"
            className="w-full flex flex-wrap items-center justify-between bg-white py-[11px] px-[4%] rounded-[18px] shadow"
          >
            <figure className="w-3/12">
              <img
                src={Image}
                className="w-[62px] h-[62px] object-cover"
                alt=""
                loading="lazy"
              />
            </figure>
            <section className="w-3/4">
              <h3 className="my-[6px] text-[18px]">{Title}</h3>
              <p className="text-[14px] text-[#a3a3a3]">{Desc}</p>
            </section>
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Applications;
