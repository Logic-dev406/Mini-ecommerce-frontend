import React from "react";
import SearchBar from "../Conponents/Home/SearchBar";
import Banner from "../Conponents/Home/Banner";
import Trending from "../Conponents/Home/Trending";
import ProductSection from "../Conponents/Home/ProductSection";
import Discount from "../Conponents/Home/Discount";

function Home({ searchTerm, setSearchTerm }) {
  return (
    <div className="px-0 md:px-20 ">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Banner />
      <Trending />
      {/* <ProductSection />
      <Discount /> */}
    </div>
  );
}

export default Home;
