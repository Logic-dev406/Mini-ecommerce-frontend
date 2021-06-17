import React from "react";
import SearchBar from "../Conponents/Home/SearchBar";
import Banner from "../Conponents/Home/Banner";
import Trending from "../Conponents/Home/Trending";
import ProductSection from "../Conponents/Home/ProductSection";
import Discount from "../Conponents/Home/Discount";

function Home() {
  return (
    <div className="px-52">
      <SearchBar />
      <Banner />
      <Trending />
      <ProductSection />
      <Discount />
    </div>
  );
}

export default Home;
