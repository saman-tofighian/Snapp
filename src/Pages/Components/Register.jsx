import { React } from "react";
import RegisterImage1 from "./../../img/Register1.png";
import RegisterImage2 from "./../../img/Register2.png";
import RegisterImage3 from "./../../img/Register3.png";
import RegisterImage4 from "./../../img/Register4.png";

function Register() {
  return (
    <section className="w-[100%] bg-[#F2F5F8] py-[40px]">
      <div className="w-full px-[6%]">
        <RegisterTitle />
        <RegisterVideo />
        <RegisterItems />
      </div>
    </section>
  );
}

function RegisterTitle() {
  return (
    <section className="flex justify-center w-full py-[10px] flex-wrap">
      <RegisterTitleText />
      <RegisterTitleButton />
    </section>
  );
}

function RegisterTitleText() {
  return (
    <div className="w-[100%]">
      <h2 className="text-[22px] md:text-[29px] lg:text-[33px] xl:text-[36px] font-semibold text-slate-700 text-center">
        در کمتر از ۱۰ دقیقه ثبت‌ نام کنید و به
        <strong className="text-[#21AA58]"> ناوگان اسنپ </strong> بپیوندید.
      </h2>
      <p className="text-[16px] xl:text-[18px] my-[16px] text-center leading-[35px]">
        بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام را
        اینترنتی انجام دهید
      </p>
    </div>
  );
}

function RegisterTitleButton() {
  return (
    <div className="w-full my-[16px] flex justify-center">
      <button className="px-[32px] bg-[#00d170] text-white rounded-[6px] py-[12px] text-[17px] font-semibold duration-1000 ease-out hover:bg-[#116f37]">
        ثبت‌ نام رانندگان
      </button>
    </div>
  );
}

// End Title ***************

function RegisterVideo() {
  return (
    <div className="w-full my-[40px] flex justify-center">
      <video
        src="https://web-cdn.snapp.ir/snappir-marketing/images/homepage/jazbranandeh1.mp4"
        controls
        controlsList="nodownload"
        className="rounded-[9px] w-full lg:w-[80%]"
      >
        <caption>مزایای پیوستن به ناوگان اسنپ!</caption>
      </video>
    </div>
  );
}

function RegisterItems() {
  const data = [
    {
      Image: RegisterImage1,
      Title: " درآمد تضمینی + پاداش‌های ماهانه و هفتگی",
      Description:
        "با فعالیت در ناوگان اسنپ، علاوه بر کسب درآمد مستمر و امکان تسویه در لحظه می‌توانید با شرکت در طرح‌های تشویقی مختلف، درآمد خود را افزایش دهید.",
    },
    {
      Image: RegisterImage2,
      Title: "ساعت کاری دلخواه",
      Description:
        "فعالیت در ناوگان اسنپ محدودیت زمانی ندارد و می‌توانید فعالیت خود را در هر ساعت از شبانه‌روز و متناسب با برنامه‌ی زندگی‌تان شخصی‌سازی کنید.",
    },
    {
      Image: RegisterImage3,
      Title: "مزایا و خدمات باشگاه رانندگان",
      Description:
        "در باشگاه رانندگان اسنپ می‌توانید از تسهیلات و خدمات متنوعی از جمله خدمات خودرویی، خدمات درمانی و همچنین خدمات رفاهی و آموزشی بهره‌مند شوید.",
    },
    {
      Image: RegisterImage4,
      Title: "کار‌فیکس",
      Description:
        "باشگاه رانندگان اسنپ به‌تازگی سرویس جدید «اسنپ کارفیکس» را برای سهولت دسترسی کاربران راننده به انواع خدمات خودرویی راه‌اندازی کرده است.",
    },
  ];

  return (
    <section className="flex flex-wrap w-full justify-evenly gap-y-8 mt-[6rem]">
      {data.map((val, index) => {
        return <RegisterItemArticle {...val} key={index} />;
      })}
    </section>
  );
}

function RegisterItemArticle({ Image, Title, Description }) {
  return (
    <article className="w-11/12 md:w-[46%] mx-auto md:mx-0 xl:w-[41%] rounded-[18px] bg-white py-7 px-[32px] flex flex-wrap items-center shadow">
      <RegisterItemFigure Image={Image} />
      <RegisterItemText Title={Title} Description={Description} />
    </article>
  );
}

function RegisterItemFigure({ Image }) {
  return (
    <figure className="grow xl:w-1/5 mb-3 lg:mb-0">
      <img src={Image} alt="RegisterImage" className="object-cover" />
    </figure>
  );
}

function RegisterItemText({ Title, Description }) {
  return (
    <section className="px-5 grow xl:w-4/6">
      <h3 className="my-[8px] text-[18px] font-semibold">{Title}</h3>
      <p className="text-[14px] text-[#a3a3a3] text-justify leading-[33px]">
        {Description}
      </p>
    </section>
  );
}
export default Register;
