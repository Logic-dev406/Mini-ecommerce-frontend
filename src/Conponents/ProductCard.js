import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";

function ProductCard({ product }) {
  return (
    <div className="border w-52 rounded overflow-hidden">
      <Link
        to={`/products/${product.slug}`}
        key={product.id}
        className="bg-white * hover:shadow-lg h-60 md:h-72 w-36 md:w-44 rounded"
      >
        <div className="relative ">
          <img
            className="h-40 md:h-48 w-40 md:w-52 rounded-t"
            src={product.image}
            alt="product"
          />
          <FavoriteIcon
            className="absolute top-3 right-3 text-red-600"
            fontSize="small"
          />
        </div>
        <div className="flex px-2 py-2 items-center justify-between">
          <h1 className="text-left text-black  font-semibold  ">
            {product.name}
          </h1>

          <h5 className="text-left text-sm text-gray-500 ">
            <NumberFormat
              value={product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
            />
          </h5>
        </div>
        <div className="flex items-center text-yellow-600 pl-2 pb-2 text-sm">
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
