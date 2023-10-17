import React from "react";
import { Component } from "react";

export default class Cards extends Component {
  render() {
    const myData = [
      {
        Image:
          "https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png",
        Title: "به صرفه",
        Description:
          "سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.",
      },
      {
        Image:
          "https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png",
        Title: "سریع",
        Description:
          "قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازه",
      },
      {
        Image:
          "https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png",
        Title: "آسان",
        Description:
          "برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.",
      },
    ];
    return (
      <section className="w-[100%] py-11">
        <div className="w-full px-[6%]">
          <article className="flex flex-wrap justify-center w-full xl:justify-evenly gap-y-8 xl:gap-y-0">
            {myData.map((val, index) => {
              return <CardItems key={index} {...val} />;
            })}
          </article>
        </div>
      </section>
    );
  }
}

class CardItems extends Component {
  render() {
    return (
      <div className="w-11/12 md:w-1/2 xl:w-1/4 p-5 rounded-[18px] mx-auto xl:mx-0">
        <figure className="w-1/2 mx-auto xl:mx-0 bg-[#f2f5f8] rounded-[18px] mb-3">
          <img
            src={this.props.Image}
            alt="CardItems"
            className="object-cover w-full"
          />
        </figure>
        <div className="w-full px-3 mt-3 text-center xl:text-right">
          <h2 className="my-[17px] text-[22px] font-semibold text-[#21AA58]">
            {this.props.Title}
          </h2>
          <p className="text-[#404040] leading-[36px] xl:text-justify">
            {this.props.Description}
          </p>
        </div>
      </div>
    );
  }
}
