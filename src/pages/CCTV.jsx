import React, { useState } from "react";
// import { Jumbotron } from "../components/Jumbotron";
import cctvInhp from "../img/cctv/cctv-in-hp.png";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export const CCTV = () => {
  return (
    <div>
      <div className="bg-[url('../img/jumbotronCctv.png')] relative  bg-center  ">
        <div className="absolute w-full h-full opacity-75 bg-biruJita"></div>
        <Header />
        <div className="relative flex items-center justify-between px-1 mt-10 mb-0 text-xl lg:mt-20 2sm:px-10 md:px-20 2sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl md:-mb-2 ">
          <p className="font-bold text-white ">
            Dengan satu sentuhan terpantau di genggaman
          </p>
          <img
            src={cctvInhp}
            alt="gambar cctv di dalam hp"
            className="h-32 -mb-5 md:h-48 lg:h-64 2xl:h-72"
          />
        </div>
      </div>

      <div>
        <p className="bg-[#d9d9d9] inline-block p-2 rounded-b-xl text-biruJita font-bold md:text-xl md:p-3">
          Harga kompetitif dan berkualitas
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center font-roboto text-biruJita">
          Paket CCTV
        </h2>
      </div>

      <Footer />
    </div>
  );
};
