import React from "react";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import Loader from "../Loader";
import ProductCard from "../ProductCard";
// import { Link } from "react-router-dom";
// import NumberFormat from "react-number-format";

const ProductSection = () => {
  const url = `http://localhost:3000/api/products`;

  let products = useAxiosGet(url);
  console.log(products);

  let content = null;

  if (products.error) {
    content = (
      <p className="text-red-500 flex justify-center text-2xl">
        Something went wrong please try again
      </p>
    );
  }

  if (products.data) {
    content = products.data.data.map((product) => (
      <div key={product.id}>
        <ProductCard product={product} />
      </div>
    ));
  }

  return (
    <div className=" w-full rounded ">
      {products.loading ? (
        <Loader></Loader>
      ) : (
        <div className="w-full h-full justify-center grid grid-cols-2 md:grid-cols-5 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 bg-transparent md:bg-transparent mt-5">
          {content}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
