import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/products/${product.id}`}>
        <div className="w-full h-64 bg-blue bg-cover"></div>

        <img src={product.image} alt="product" />
      </Link>

      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
      </div>

      <Link
        to={`/products/${product.id}`}
        className="bg-blue-500 text-white p-2 flex justify-center"
      >
        View
      </Link>
    </div>
  );
}

export default ProductCard;
