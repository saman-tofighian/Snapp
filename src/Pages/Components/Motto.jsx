import React from "react";
import Img from "./../../img/intro_desktop.jpg";

function Motto() {
  return (
    <section className="w-full mt-[5rem] lg:h-[421px]">
      <div className="flex flex-wrap items-center w-full h-full">
        <TextMotto />
        <ImgMotto />
      </div>
    </section>
  );
}

function ImgMotto() {
  return (
    <figure className="h-full w-full lg:w-[50%]">
      <img
        src={Img}
        className="object-cover w-full h-full max-h-[421px]"
        alt="ImgMotto"
      />
    </figure>
  );
}

function TextMotto() {
  return (
    <section className="h-full w-full lg:w-[50%] bg-[#21aa58] py-[32px] px-[6%] flex flex-wrap flex-col justify-center">
      <h1 className="text-white mb-[16px] text-[22px] lg:text-[29px] xl:text-[38px] text-center lg:text-right">
        تجربه&zwnj;ی زندگی راحت&zwnj;تر، سریع&zwnj;تر و به&zwnj;صرفه&zwnj;تر با
        سوپراپلیکیشن اسنپ!
      </h1>
      <p className="text-white text-[17px] lg:text-[18px] xl:text-[20px] leading-[37px] text-center lg:text-right">
        از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر،
        رزرو هتل و... را میتوانید با اسنپ انجام دهید.
      </p>
      <ButtonMotto />
    </section>
  );
}

function ButtonMotto() {
  return (
    <div className="w-full mt-6 flex justify-center xl:justify-start">
      <button className="outline-none cursor-pointer text-white rounded-[6px] border border-white bg-transparent py-[13px] px-[27px] duration-700 ease-out hover:bg-[#ffffff23] text-[17px]">
        ورود به وب اپلیکیشن اسنپ
      </button>
    </div>
  );
}

export default Motto;
