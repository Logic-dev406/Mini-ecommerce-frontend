import React from "react";
import SearchBar from "../Conponents/Home/SearchBar";
import Banner from "../Conponents/Home/Banner";
import Trending from "../Conponents/Home/Trending";
import ProductSection from "../Conponents/Home/ProductSection";

function Home() {
  return (
    <div className="px-52">
      <SearchBar />
      <Banner />
      <Trending />
      <ProductSection />
    </div>
  );
}

export default Home;
