import React from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

export const CardCCTV = ({ img, title, harga4ch, harga8ch }) => {
  return (
    <div className="bg-[#d9d9d9] pt-7 pb-6 rounded-lg w-[280px] dark:bg-[#032A49]">
      <Link to={`/`}>
        <img
          src={img}
          alt={title}
          className="mx-auto transition duration-100 h-52 hover:scale-110"
        />
        <p className="my-1 text-2xl font-bold uppercase ml-9 text-biruJita font-poppins hover:text-orangeJita dark:text-white dark:hover:text-orangeJita">
          {title}
        </p>
        {harga4ch !== 0 && (
          <p className="ml-9 text-biruJita dark:text-white">
            Paket DVR 4 CH:{" "}
            <span className="font-bold">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                currencyDisplay: "symbol",
                minimumFractionDigits: 0,
              }).format(harga4ch)}
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
            }).format(harga8ch)}
          </span>
        </p>
      </Link>
      <a
        className="flex items-center justify-center p-1 mx-auto rounded-lg mt-7 w-52 bg-biruJita hover:bg-orangeJita"
        href="https://wa.link/3507s0"
      >
        <IoLogoWhatsapp color="green" size={40} />
        <p className="text-xl font-bold text-white">Pesan Sekarang</p>
      </a>
    </div>
  );
};
