import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 text-center divide-y divide-gray-500 text-xs p-3 absolute bottom-0 w-full">
      <div className="flex items-center divide-x pb-5 divide-gray-500 justify-between mx-0 md:mx-52 px-5">
        <div className="text-left mr-6 md:mr-5 lg:mr-0 ">
          <p className="py-0 md:py-1">Men Fashion</p>
          <p className="py-0 md:py-1">Women Fashion</p>
          <p className="py-0 md:py-1">Accesories</p>
        </div>
        <div className="pl-5 md:pl-48 mr-6 md:mr-16 lg:mr-0 text-left">
          <p className="py-0 md:py-1">About Us</p>
          <p className="py-0 md:py-1">Contact Us</p>
          <p className="py-0 md:py-1">Location</p>
        </div>
        <div className="pl-5 md:pl-48 text-left">
          <p className="py-0 md:py-1">Order And Return</p>
          <p className="py-0 md:py-1">FaQs</p>
          <p className="py-0 md:py-1">Search Terms</p>
        </div>
      </div>
      <p className="pt-2">
        Copyright &copy; {new Date().getFullYear()} | MINI E-COMMERCE.
      </p>
    </footer>
  );
}

export default Footer;
