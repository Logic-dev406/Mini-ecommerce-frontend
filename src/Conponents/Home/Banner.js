import React from "react";
import bannerImg from "../../assets/images/m1.jpeg";

function Banner() {
  return (
    <div className=" flex items-center h-40 md:h-96 my-5 rounded-lg w-full bg-transparent">
      <div className="flex items-center justify-center text-white h-full w-full rounded-l-lg bg-red-500 bg-gradient-to-r from-black via-black-90 to-gray-400">
        <div className="font-normal md:font-bold text-sm md:text-3xl">
          <h1>HOT SALE</h1>
          <h1>80% OFF</h1>
        </div>
      </div>
      <img
        className="h-full w-52 md:w-full bg-no-repeat bg-center rounded-r-lg bg-header1 bg-cover  "
        src={bannerImg}
        alt="banner"
      />
    </div>
  );
}

export default Banner;
