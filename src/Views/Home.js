import React from "react";
// import Loader from "../Conponents/Loader";
// import ProductCard from "../Conponents/ProductCard";
import { useAxiosGet } from "../Hooks/HttpRequest";
import SearchBar from "../Conponents/Home/SearchBar";
import Banner from "../Conponents/Home/Banner";
import Trending from "../Conponents/Home/Trending";

function Home() {
  const url = `http://localhost:3000/api/products`;

  let products = useAxiosGet(url);
  console.log(products);

  //   let content = null;

  //   if (products.error) {
  //     content = (
  //       <p className="text-red-500 flex justify-center text-2xl">
  //         Something went wrong please try again
  //       </p>
  //     );
  //   }

  //   if (products.loading) {
  //     content = <Loader></Loader>;
  //   }

  //   if (products.data) {
  //     content = products.data.data.map((product) => (
  //       <div key={product.id}>
  //         <ProductCard product={product} />
  //       </div>
  //     ));
  //   }

  return (
    <div className="px-52">
      <SearchBar />
      <Banner />
      <Trending />
    </div>
  );
}

export default Home;
