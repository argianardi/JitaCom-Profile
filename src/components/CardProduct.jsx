import React from "react";
import { Link } from "react-router-dom";

export const CardProduct = ({ img, product, desc }) => {
  return (
    <div className="bg-[#d9d9d9] p-2 rounded-lg">
      <Link to={`/${product}`}>
        <img src={img} alt={product} width="200" className="pt-5 mx-auto" />
        <p className="my-3 text-2xl font-bold text-center uppercase text-biruJita font-poppins hover:text-orangeJita">
          {product}
        </p>
        <p className="hover:underline">{desc}</p>
      </Link>
    </div>
  );
};
