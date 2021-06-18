import React from "react";

const Trending = () => {
  return (
    <div className="flex my-4 md:my-8 items-center text-sm md:text-lg font-normal md:font-semibold">
      <h1 className=" px-2 md:px-4 mr-2 bg-blue-300 rounded ">Latest</h1>
      <h1 className=" px-2 md:px-4 mx-2 bg-green-300 rounded ">Trending</h1>
      <h1 className=" px-2 md:px-4 mx-2 bg-blue-300 rounded ">Old</h1>
      <h1 className=" px-2 md:px-4 mx-2 bg-green-300 rounded ">New</h1>
    </div>
  );
};

export default Trending;
