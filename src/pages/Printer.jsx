import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const Printer = () => {
  return (
    <>
      <div className="bg-[url('../img/printer/jumbotronPrinter.png')] relative  bg-center  pb-12">
        <div className="absolute w-full h-full opacity-75 bg-biruJita"></div>
        <Header />
        <p className="relative my-5 text-xl font-bold text-center text-white 2sm:my-20 2sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl font-roboto">
          Laptop Original dan Bergaransi
        </p>
      </div>

      <div>
        <p className="bg-[#d9d9d9] inline-block p-2 rounded-b-xl text-biruJita font-bold md:text-xl md:p-3">
          Harga kompetitif dan berkualitas
        </p>
      </div>

      <Footer />
    </>
  );
};
