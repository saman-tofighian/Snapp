import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import ImageBanner from "./../../img/FoodBanner.jpg";

class Banner extends Component {
  render() {
    return (
      <section className="w-full my-14">
        <div className="w-full px-[6%] py-7 flex justify-center">
          <BannerImg />
        </div>
      </section>
    );
  }
}

class BannerImg extends Component {
  render() {
    return (
      <div className="w-full xl:w-[82%] flex">
        <ul className="flex justify-center w-full">
          <li className="flex justify-center w-full">
            <Link to="/" className="flex justify-center w-fit">
              <img
                src={ImageBanner}
                alt="FoodBanner"
                className="object-cover rounded-[10px] h-[173px] md:h-[220px] lg:h-[257px] xl:h-[313px]"
              />
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    );
  }
}

export default Banner;
