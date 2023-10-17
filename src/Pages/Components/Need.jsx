import React from "react";

function Need() {
  return (
    <section className="w-full py-12">
      <div className="w-[100%] px-[6%]">
        <Article />
      </div>
    </section>
  );
}

function Article() {
  return (
    <article className="w-full flex flex-wrap justify-center xl:justify-between items-center gap-y-10 xl:gap-y-0">
      <Image />
      <Text />
    </article>
  );
}

function Text() {
  return (
    <div className="w-11/12 xl:w-2/5 order-1 xl:order-2 text-center xl:text-right mx-auto xl:mx-0 lg:p-6">
      <h2 className="text-[25px] mb-[16px] font-semibold text-[#21AA58]">
        سوپر اپ اسنپ؛ پاسخی به تمام نیازها
      </h2>
      <p className="leading-[36px] text-[14px] text-justify">
        اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد
        شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و
        ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر
        درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و
        مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط
        (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.
      </p>
    </div>
  );
}

function Image() {
  return (
    <figure className="w-11/12 xl:w-3/5 order-2 xl:order-1 flex justify-center mx-auto xl:mx-0 lg:p-6">
      <img
        src="https://web-cdn.snapp.ir/snapp-website/images/homepage/super-app.jpg"
        alt="NeedImage"
        loading="lazy"
        className="h-[50vh] min-h-[450px] object-cover rounded-xl"
      />
    </figure>
  );
}

export default Need;
