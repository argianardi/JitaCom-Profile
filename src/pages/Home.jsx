import React from "react";
import Header from "../components/Header";

export const Home = () => {
  return (
    <div>
      <div className="bg-[url('../img/jumbotronHome.png')] bg-center  relative pb-3 sm:pb-10 md:pb-16 ">
        <div className="absolute w-full h-full opacity-75 bg-biruJita"></div>
        <Header />
        <div className="relative my-10 text-xl text-center md:my-14 lg:my-20 xl:my-24 sm:text-3xl md:text-4xl xl:text-5xl ">
          <p className="font-bold text-white ">
            Jita Com{" "}
            <span className="text-3xl font-bold md:text-5xl ">&rarr;</span>{" "}
            Solusi kebutuhan{" "}
          </p>
          <p className="mt-2 font-bold text-white">Informatika & Teknologi</p>
        </div>
      </div>
      <div>Home</div>
    </div>
  );
};
