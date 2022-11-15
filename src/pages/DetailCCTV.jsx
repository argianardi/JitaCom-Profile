import React from "react";
import { useLocation } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const DetailCCTV = () => {
  const location = useLocation();
  return (
    <div className="dark:bg-[#03002e]">
      <Header />
      <div className="w-full py-10 -mt-20 border border-blue-900 cctv"></div>

      <div className="px-2">
        <div className="flex flex-col flex-wrap p-1 xs:p-2 sm:p-3 my-20 rounded-md shadow-md md:flex-row text-biruJita shadow-black/60 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[768px] lg:max-w-[1000px] mx-auto dark:bg-[#032A49] dark:text-white">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div>
              <img
                src={location.state.img}
                alt={`gambar ${location.state.fullTitle}`}
                className="mx-auto rounded-md h-72"
              />
            </div>
            <div className="ml-0 md:ml-3">
              <h1 className="text-lg font-bold">{location.state.fullTitle}</h1>
              {location.state.harga4ch !== 0 && (
                <p className="mt-2 ml-3 dark:text-white">
                  Paket DVR 4 CH:{" "}
                  <span className="font-bold">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      currencyDisplay: "symbol",
                      minimumFractionDigits: 0,
                    }).format(location.state.harga4ch)}
                  </span>
                </p>
              )}
              <p className="ml-3 dark:text-white">
                {" "}
                Paket DVR 8 CH:{" "}
                <span className="font-bold">
                  {Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                  }).format(location.state.harga8ch)}
                </span>
              </p>
              <ul className="list-disc ml-9">
                <li>{location.state.camIndoor}</li>
                {location.state.camOutdoor !== null && (
                  <li>{location.state.camOutdoor}</li>
                )}
                <li>{location.state.dvr}</li>
                <li>{location.state.psu}</li>
                <li>{location.state.rg59}</li>
                <li>{location.state.conector}</li>
                <li>{location.state.powerCamera}</li>
                <li>{location.state.hdd}</li>
                <li>{location.state.kabelDisplay}</li>
                <li>{location.state.jasa}</li>
              </ul>
            </div>
          </div>

          <div className="self-start mt-4 ml-0 md:self-end lg:ml-6">
            <a
              className="flex items-center justify-center w-48 p-1 m-1 rounded-lg bg-biruJita hover:bg-orangeJita"
              href="https://wa.link/3507s0"
            >
              <IoLogoWhatsapp color="green" size={35} />
              <p className="font-bold text-white ">Pesan Sekarang</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
