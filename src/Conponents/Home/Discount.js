import React from "react";

const Discount = () => {
  return (
    <div className=" flex flex-col mb-20 items-center justify-center h-80 w-full bg-transparent ">
      <h1 className="text-lg md:text-3xl font-bold">
        Clearance Sales Up to 80% Off.
      </h1>
      <h1 className="text-lg md:text-3xl font-bold text-center">
        All Sales are Final!
      </h1>
      <p className="text-gray-500 text-center">
        Last chance to take advantage of our discount!
      </p>
      <button className="h-10 w-32 rounded-lg my-4 bg-black text-white focus:outline-none">
        Discover Sales
      </button>
    </div>
  );
};

export default Discount;
