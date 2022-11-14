import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import jumbotronImg from "../img/laptop/jumbotronLaptop.png";

export const Laptop = () => {
  return (
    <>
      <Header />
      <div className="w-full -mt-20 border border-blue-900 laptop">
        <p className="relative mt-24 text-xl font-bold text-center text-white mb-14 sm:mt-32 sm:mb-24 sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl font-roboto md:mt-36 md:mb-28 lg:mt-40 lg:mb-32">
          Laptop Original dan Bergaransi
        </p>
      </div>

      <div className="mb-96">
        <p className="bg-[#d9d9d9] inline-block p-2 rounded-b-xl text-biruJita font-bold md:text-xl md:p-3">
          Harga kompetitif dan berkualitas
        </p>
      </div>

      <Footer />
    </>
  );
};
