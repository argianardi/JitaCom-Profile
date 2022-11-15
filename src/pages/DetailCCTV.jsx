import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const DetailCCTV = () => {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div className="w-full py-10 -mt-20 border border-blue-900 cctv"></div>

      <div className="bh">
        <div className="br">
          <img
            src={location.state.img}
            alt={`gambar ${location.state.fullTitle}`}
          />
        </div>
        <div className="bg">
          <h1>{location.state.fullTitle}</h1>
          {location.state.harga4ch !== 0 && (
            <p className="ml-9 text-biruJita dark:text-white">
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
          <p className=" text-biruJita ml-9 dark:text-white">
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
        {/* <p>{location.state.fullTitle}</p>
        <p>{location.state.camIndoor}</p>
        <p>{location.state.camOutdoor}</p>
        <p>{location.state.dvr}</p>
        <p>{location.state.psu}</p>
        <p>{location.state.rg59}</p>
        <p>{location.conector}</p>
        <p>{location.state.powerCamera}</p>
        <p>{location.state.hdd}</p>
        <p>{location.state.kabelDisplay}</p>
        <p>{location.state.harga4ch}</p>
        <p>{location.state.harga8ch}</p>
        <img src={location.state.img} alt="" /> */}
      </div>

      <Footer />
    </div>
  );
};
