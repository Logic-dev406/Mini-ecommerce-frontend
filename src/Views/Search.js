import React, { useState, useEffect } from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";
import Loader from "../Conponents/Loader";
import ProductCard from "../Conponents/ProductCard";
// import SearchBar from "../Conponents/Home/SearchBar";

const Search = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `http://localhost:3000/api/products`;
  const res = useAxiosGet(url);
  const products = res && res.data ? res.data.data : [];
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const query = parameters.get("query");

  useEffect(() => {
    if (query && products.length > 0) {
      const content = products.filter((product) => {
        if (query === "") {
          return product;
        }

        if (product.name.toLowerCase().includes(query.toLowerCase())) {
          return product;
        }
      });

      setFilteredProducts(content);
      setLoading(false);
    }
  }, [products, query]);

  return (
    <div className=" px-52 mb-28 w-full  ">
      {/* <SearchBar /> */}
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="w-full h-full justify-center grid grid-cols-2 md:grid-cols-5 gap-y-2 md:gap-y-5 gap-x-2 md:gap-x-5 bg-transparent md:bg-transparent mt-5">
          {filteredProducts.length > 0 &&
            filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}

          {!loading && filteredProducts.length < 1 && (
            <p className="text-red-500 flex justify-center text-2xl">
              We couldn't find a product that match your search string
            </p>
          )}

          {!loading && res.error && (
            <p className="text-red-500 flex justify-center text-2xl">
              Something went wrong please try again
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
