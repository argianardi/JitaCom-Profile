import React from "react";
import { Link } from "react-router-dom";

export const CardProduct = ({ img, product, desc }) => {
  return (
    <div className="bg-[#d9d9d9] p-2 rounded-lg w-[280px] dark:bg-[#032A49]">
      <Link to={`/${product}`}>
        <img
          src={img}
          alt={product}
          width="200"
          className="pt-5 mx-auto transition duration-100 hover:scale-110"
        />
        <p className="mx-auto my-3 text-2xl font-bold text-center uppercase text-biruJita font-poppins hover:text-orangeJita dark:hover:text-orangeJita dark:text-putihJita">
          {product}
        </p>
        <p className="hover:underline dark:text-putihJita">{desc}</p>
      </Link>
    </div>
  );
};
